
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  isRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.token){
      request = this.addToken(request, this.authService.token);
    }

    return next.handle(request);
  }

  addToken(request: HttpRequest<any>, token) {
    return request.clone({
      setHeaders: {
        lendi_auth_token: token
      }
    });
  }


}
