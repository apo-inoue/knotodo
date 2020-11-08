import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';

export const errorLink = onError(error => {
  if (error.networkError) {
    error.forward;
  }
});

export const retryLink = new RetryLink({
  delay: count => {
    return count * 5;
  },
  attempts: {
    max: 3,
  },
});
