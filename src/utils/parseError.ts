const hasMessage = (error: unknown): error is { message: string } =>
  typeof error === 'object' && error !== null && 'message' in error;

export const parseError = (error: unknown) => {
  if (typeof error === 'string') {
    return error;
  }

  if (hasMessage(error)) {
    return error.message;
  }

  return 'An error occured. Contact somebody.';
};
