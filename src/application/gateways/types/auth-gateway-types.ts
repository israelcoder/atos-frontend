// Cadastro
export type SignupHttpInput = {
  name: string;
  email: string;
  password: string;
  tenantId: string;
  role: string;
};

export type SendEmailConfirmationCodeHttpInput = {
  email: string;
  confirmationCode: string;
};
export type SendEmailConfirmationCodeHttpOutput = {
  message: string;
};

// Login
export type SigninHttpInput = {
  email: string;
  password: string;
};
export type SigninHttpOutput = {
  token: string;
};
