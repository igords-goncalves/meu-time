import { toast } from 'react-toastify';

export const success = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    theme: 'light',
  });
};

export const erro = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    theme: 'light',
  });
};
