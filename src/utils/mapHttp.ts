const mapHttp: Record<string, number> = { 
  SUCCESSFUL: 200,
  CREATED: 201,
  INVALID_DATA: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
};

export default function statusCode(statusText: string): number {
  return mapHttp[statusText] ?? 500;
}