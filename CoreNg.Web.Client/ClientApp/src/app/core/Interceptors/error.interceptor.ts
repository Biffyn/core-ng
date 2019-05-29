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
import { SnotifyService } from 'ng-snotify';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private snotifyConfig = {
    timeout: 3000,
    showProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true
  };

  constructor(public snotify: SnotifyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          try {
            this.snotify.error(error.error, 'Error Occurred', this.snotifyConfig);
          } catch (e) {
            this.snotify.error('An unknown error occurred', 'Error Occurred', this.snotifyConfig);
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
