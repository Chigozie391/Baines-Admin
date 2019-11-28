import { environment } from 'src/environments/environment';

export class Endpoint {
  public static LOGIN = `${environment.baseUrl}/auth`;
  public static FORGOT_PASSWORD = `${environment.baseUrl}/password/forgot`;
}