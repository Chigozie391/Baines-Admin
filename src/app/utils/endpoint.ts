import { environment } from 'src/environments/environment';

export class Endpoint {
  public static LOGIN = `${environment.baseUrl}/auth`;
}