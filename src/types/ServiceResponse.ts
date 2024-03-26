type ServiceResponseErrorType = 'INVALID_DATA' | 'NOT_FOUND' | 'UNAUTHORIZED';

type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

type ServiceResponseSuccessful<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T,
}; 

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccessful<T>;