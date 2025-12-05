import {
  SendEmailConfirmationCodeHttpInput,
  SendEmailConfirmationCodeHttpOutput,
  SigninHttpInput,
  SigninHttpOutput,
  SignupHttpInput,
} from './types/auth-gateway-types';
import { Gateway } from './types/gateway';

export class AuthGateway extends Gateway {
  public signup(input: SignupHttpInput) {
    return this.httpProvider.post<{ message: string }>('/register', input);
  }

  public sendEmailConfirmationCode({
    email,
    confirmationCode,
  }: SendEmailConfirmationCodeHttpInput) {
    return this.httpProvider.post<SendEmailConfirmationCodeHttpOutput>(
      '/confirm-email',
      { email, token: confirmationCode },
    );
  }

  public signin(input: SigninHttpInput) {
    return this.httpProvider.post<SigninHttpOutput>('/login', input);
  }
}
