import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.api_url },
    {
      provide: 'SnotifyToastConfig',
      useValue: ToastDefaults
    },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
