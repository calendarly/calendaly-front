import { SharedService } from './providers/shared.service';
import { ResponseInterceptorService } from './providers/interceptors/response-interceptor.service';
import { RequestInterceptorService } from './providers/interceptors/request-interceptor.service';
import { FullcalendarModule } from './fullcalendar/fullcalendar.module';
import { PostModule } from './pages/post/post.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {AuthGuard} from './providers/auth.guard';
import {AuthService} from './providers/auth.service';
import {ContainerService} from './providers/container.service';
import {EventsService} from './providers/events.service';
// import { ToastrModule } from 'toastr-ng2';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
    // ToastrModule.forRoot(),
    PostModule,
    FullcalendarModule,
    NgHttpLoaderModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    AuthGuard,
    AuthService,
    ContainerService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
