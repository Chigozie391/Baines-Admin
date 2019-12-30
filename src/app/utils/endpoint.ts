import { environment } from 'src/environments/environment';

export class Endpoint {

  public static ADMIN_LOGIN = `${environment.baseUrl}/auth/admin/login`;
  public static ADMIN_LOGOUT = `${environment.baseUrl}/auth/admin/logout`;
  public static FORGOT_PASSWORD = `${environment.baseUrl}/auth/password/forgot`;

  public static LOANS = `${environment.baseUrl}/admin/loan`;
  public static LOAN_DETAILS = `${environment.baseUrl}/admin/loan/2?profile=true&schedule=true&transaction=true`;
  public static LOAN_PRODUCT = `${environment.baseUrl}/admin/loan/2?profile=true&schedule=true&transaction=true`;


  public static SAVINGS = `${environment.baseUrl}/admin/saving`;
  public static SAVINGS_DETAILS = `${environment.baseUrl}/admin/saving/18?profile=true&schedules=true&transaction=true`;

  public static CREATE_PRODUCT = `${environment.baseUrl}/admin/products`;
  public static PRODUCT_FREQUENCY = `${environment.baseUrl}/admin/products/frequency`;
  public static PRODUCT_TYPE = `${environment.baseUrl}/admin/products/type`;

  public static REPAYMENT_METHODS = `${environment.baseUrl}/admin/products/repayment-methods`;
  public static REPAYMENT_MODELS = `${environment.baseUrl}/admin/products/repayment-models`;

  public static TENOR_TYPES = `${environment.baseUrl}/admin/products/tenor-types`;

  public static GET_PRODUCT = `${environment.baseUrl}/admin/products/7`;
  public static GET_PRODUCTS = `${environment.baseUrl}/admin/products`;
  public static CHANGE_PRODUCT_STATUS = `${environment.baseUrl}/admin/products/status/7`;


  public static GET_ALL_SAVERS = `${environment.baseUrl}/admin/user/savers`;

  public static USER = `${environment.baseUrl}/admin/user`;
  public static GET_ALL_USERS = `${environment.baseUrl}/admin/user`;
  public static USER_SAVINGS_PLAN = `${environment.baseUrl}/admin/user/2/saving-plans`;
  public static USER_LOANS = `${environment.baseUrl}/admin/user/2/loans`;
  public static USER_BANKING_INFO = `${environment.baseUrl}/admin/user/2/bank-info?card=true`;

 
  public static GET_ALL_BORROWERS = `${environment.baseUrl}/admin/user/borrowers`;







  public static GET_ALL_LENDERS = `${environment.baseUrl}/profiles/lenders`;
  public static PROFILES = `${environment.baseUrl}/profiles`;
  public static USERSs = `${environment.baseUrl}/auth/admin/users`;
  public static COLLECTIONS = `${environment.baseUrl}/collections`;
}