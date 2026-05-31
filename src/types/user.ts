type User = {
  account: {
    firstname: string;
    lastname: string;
    email: string;
  };
  email: string;
  firstname: string;
  lastname: string;
  requests: {
    current: number;
    limit_day: number;
  };
  subscription: {
    plan: string;
    end: string;
    active: boolean;
  };
};
