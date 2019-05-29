import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          try {
            // TODO: Add Notification service to display error messages
            console.error('An error occurred:', error.message);
          } catch (e) {
            // TODO: Add Notification service to display error messages
            console.error('An error occurred:', error.message);
          }
        }

        if (isDevMode()) {
          this.logError(error);
        }
        return of(error);
      })
    );
  }

  private logError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.message}`);
      console.log(error);
    }
  }
}
