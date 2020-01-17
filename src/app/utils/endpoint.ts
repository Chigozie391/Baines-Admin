import { environment } from 'src/environments/environment';

export class Endpoint {

  public static ADMIN_ACTIVATE = `${environment.baseUrl}/auth/admin/activate`;
  public static ADMIN_LOGIN = `${environment.baseUrl}/auth/admin/login`;
  public static ADMIN_LOGOUT = `${environment.baseUrl}/auth/admin/logout`;
  public static FORGOT_PASSWORD = `${environment.baseUrl}/auth/password/forgot`;
  public static CHANGE_PASSWORD = `${environment.baseUrl}/admin/account/password`;

  public static LOANS = `${environment.baseUrl}/admin/loan`;
  public static LOANS_STATS = `${environment.baseUrl}/admin/report/loan-stats`;


  public static SAVINGS = `${environment.baseUrl}/admin/saving`;
  public static SAVINGS_STATS = `${environment.baseUrl}/admin/report/saving-stats`;

  public static CREATE_PRODUCT = `${environment.baseUrl}/admin/products`;
  public static PRODUCT_FREQUENCY = `${environment.baseUrl}/admin/products/frequency`;
  public static PRODUCT_TYPE = `${environment.baseUrl}/admin/products/type`;

  public static REPAYMENT_METHODS = `${environment.baseUrl}/admin/products/repayment-methods`;
  public static REPAYMENT_MODELS = `${environment.baseUrl}/admin/products/repayment-models`;

  public static TENOR_TYPES = `${environment.baseUrl}/admin/products/tenor-types`;

  public static GET_PRODUCT = `${environment.baseUrl}/admin/product`;
  public static GET_PRODUCTS = `${environment.baseUrl}/admin/products`;


  public static GET_ALL_SAVERS = `${environment.baseUrl}/admin/user/savers`;

  public static USER = `${environment.baseUrl}/admin/user`;
  public static GET_ALL_USERS = `${environment.baseUrl}/admin/user`;

 
  public static GET_ALL_BORROWERS = `${environment.baseUrl}/admin/user/borrowers`;

  public static USERS_STATS = `${environment.baseUrl}/admin/report/user-stats`;


  public static GET_ALL_TRANSACTIONS = `${environment.baseUrl}/admin/transaction`;

  public static AUDIT_LOGS = `${environment.baseUrl}/admin/audit`;

  public static TEAM = `${environment.baseUrl}/admin/team`;

  public static REPORTS = `${environment.baseUrl}/admin/report`;

  public static UPLOAD_IMAGE = 'https://v2-test.lendsqr.com/api/v1/util/upload/photo';
  

  public static GET_ALL_LENDERS = `${environment.baseUrl}/profiles/lenders`;
  public static PROFILES = `${environment.baseUrl}/profiles`;
  public static USERSs = `${environment.baseUrl}/auth/admin/users`;
  public static COLLECTIONS = `${environment.baseUrl}/collections`;
}