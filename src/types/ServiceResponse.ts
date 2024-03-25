type ServiceResponseErrorType = 'INVALID' | 'NOT_FOUND' | 'UNAUTHORIZED';

type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: 'Dados invalidos' }
};

type ServiceResponseSuccessful<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T,
}; 

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccessful<T>;