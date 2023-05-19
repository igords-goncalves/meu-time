import { toast } from 'react-toastify';

export const notify = (data: any) => {
  toast.success(
    `Login efetuado com sucesso ${data.response.account.firstname}! `,
    {
      position: 'top-right',
      theme: 'light',
    },
  );
};
