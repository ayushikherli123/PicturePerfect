import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KnowUsComponent } from './know-us/know-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HimgComponent } from './himg/himg.component';
import { RegisterComponent } from './register/register.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { BillComponent } from './bill/bill.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminuserqueryComponent } from './adminuserquery/adminuserquery.component';
import { AdminuserbookingsComponent } from './adminuserbookings/adminuserbookings.component';
import { AdminuserfeedbackComponent } from './adminuserfeedback/adminuserfeedback.component';
import { AdminthemesComponent } from './adminthemes/adminthemes.component';
import { AdminphotographersComponent } from './adminphotographers/adminphotographers.component';
import { ForgotemailComponent } from './forgotemail/forgotemail.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { PhotographerregisterComponent } from './photographerregister/photographerregister.component';
import { PhotographerloginComponent } from './photographerlogin/photographerlogin.component';
import { RegisterhomeComponent } from './registerhome/registerhome.component';
import { PhotographerhomeComponent } from './photographerhome/photographerhome.component';
import { PhotographerbookingsComponent } from './photographerbookings/photographerbookings.component';
import { PhotographerforgotemailComponent } from './photographerforgotemail/photographerforgotemail.component';
import { UpdatepswdphotographerComponent } from './updatepswdphotographer/updatepswdphotographer.component';
import { PhotographerprofileComponent } from './photographerprofile/photographerprofile.component';
import { UpdatephotographerprofileComponent } from './updatephotographerprofile/updatephotographerprofile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { CustomerService } from './customer.service';
import { QueryService } from './query.service';
import { AuthService } from './auth.service';
import { ThemeService } from './theme.service';
import { PhotographerService } from './photographer.service';
import { BookingService } from './booking.service';
import { FeedbackService } from './feedback.service';
import { AdminauthService } from './adminauth.service';
import { GalleryService } from './gallery.service';
import { PhotographerauthService } from './photographerauth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowUsComponent,
    GalleryComponent,
    PortfolioComponent,
    BookingComponent,
    ContactComponent,
    LoginComponent,
    FeedbackComponent,
    HimgComponent,
    RegisterComponent,
    UserBookingsComponent,
    BillComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminusersComponent,
    AdminuserqueryComponent,
    AdminuserbookingsComponent,
    AdminuserfeedbackComponent,
    AdminthemesComponent,
    AdminphotographersComponent,
    ForgotemailComponent,
    UpdatepasswordComponent,
    ClientprofileComponent,
    UpdateprofileComponent,
    PhotographerregisterComponent,
    PhotographerloginComponent,
    RegisterhomeComponent,
    PhotographerhomeComponent,
    PhotographerbookingsComponent,
    PhotographerforgotemailComponent,
    UpdatepswdphotographerComponent,
    PhotographerprofileComponent,
    UpdatephotographerprofileComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent},
      { path: 'photographer_login', component: PhotographerloginComponent},
      { path: 'booking', component: BookingComponent, canActivate: [AuthService]},
      { path: 'profile', component: ClientprofileComponent, canActivate: [AuthService]},
      { path: 'update_profile', component: UpdateprofileComponent, canActivate: [AuthService]},
      { path: 'update_photographer_profile', component: UpdatephotographerprofileComponent, canActivate: [PhotographerauthService]},
      // { path: 'contact', component: ContactComponent},
      { path: 'feedback', component: FeedbackComponent},
      { path: 'gallery', component:GalleryComponent},
      { path: 'error', component: ErrorpageComponent},
      // { path: 'knowUs', component: KnowUsComponent},
      { path: 'portfolio', component: PortfolioComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'photographer_register', component: PhotographerregisterComponent},
      { path: 'register_home', component: RegisterhomeComponent},
      { path: 'user_bookings', component: UserBookingsComponent},
      { path: 'bill', component: BillComponent},
      { path: 'forgotEmail', component: ForgotemailComponent},
      { path: 'forgot_photographerEmail', component: PhotographerforgotemailComponent},
      { path: 'updatepswd', component: UpdatepasswordComponent},
      { path: 'updatepswd_photographer', component: UpdatepswdphotographerComponent},
      { path: 'admin', component: AdminloginComponent},
      { path: 'adminhome', component: AdminhomeComponent, canActivate: [AdminauthService], children: [
        { path: '', redirectTo: 'userbooking', pathMatch: 'full'},
        {path: 'userlist', component: AdminusersComponent},
        {path: 'userquery', component: AdminuserqueryComponent},
        {path: 'userbooking', component: AdminuserbookingsComponent},
        {path: 'userfeedback', component: AdminuserfeedbackComponent},
        {path: 'themeslist', component: AdminthemesComponent},
        {path: 'photographerslist', component: AdminphotographersComponent}
      ]},
      { path: 'phome', component: PhotographerhomeComponent, canActivate: [PhotographerauthService], children: [
        { path: '', redirectTo: 'photographer_booking', pathMatch: 'full'},
        {path: 'photographer_booking', component: PhotographerbookingsComponent},
        { path: 'photographer_profile', component: PhotographerprofileComponent}
      ]},  
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'error'}
    ])
  ],
  providers: [
    QueryService,
    CustomerService,
    AuthService,
    ThemeService,
    PhotographerService,
    BookingService,
    FeedbackService,
    AdminauthService,
    GalleryService,
    PhotographerauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
