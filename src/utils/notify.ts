import { toast } from 'react-toastify';

export const success = (data: any) => {
  toast.success(
    `Login efetuado com sucesso ${data.response.account.firstname}! `,
    {
      position: 'top-right',
      theme: 'light',
    },
  );
};

export const err = () => {
  toast.error(
    'Desculpe algo saiu errado verifique sua chave de acesso e tente novamente',
    {
      position: 'top-right',
      theme: 'light',
    },
  );
};
