import { environment } from 'src/environments/environment';

export class Endpoint {
  public static LOGIN = `${environment.baseUrl}/auth`;
  public static ADMIN_LOGIN = `${environment.baseUrl}/auth/admin/signin`;
  public static FORGOT_PASSWORD = `${environment.baseUrl}/auth/password/forgot`;
  public static LOAN_PRODUCT = `${environment.baseUrl}/products`;
  public static GET_ALL_LENDERS = `${environment.baseUrl}/profiles/lenders`;
  public static GET_ALL_BORROWERS = `${environment.baseUrl}/profiles/borrowers`;
  public static PROFILES = `${environment.baseUrl}/profiles`;
  public static USERS = `${environment.baseUrl}/auth/admin/users`;
  public static COLLECTIONS = `${environment.baseUrl}/collections`;
}