const mapHttp: Record<string, number> = { 
  SUCCESSFUL: 200,
  CREATED: 201,
  INVALID: 400,
  NOT_FOUND: 400,
  UNAUTHORIZED: 400,
};

export default function statusCode(statusText: string): number {
  return mapHttp[statusText] ?? 500;
}