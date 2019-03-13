import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ParticlesModule } from 'angular-particle';


import {HomeComponent} from './home/home.component' ;
import {ProgramsComponent} from './programs/programs.component' ;
import {ProgramTopComponent} from './programs/programTop/programTop.component' ;
import {FirstProgramComponent} from './programs/FirstProgram/FirstProgram.component' ;
import {ContactComponent} from './contact/contact.component' ;
import {DonationComponent} from './donation/donation.component' ;
import { CheckinComponent } from './checkin/checkin.component';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';
import { AwardSectionComponent } from './award-section/award-section.component';
import { MissonSectionComponent } from './misson-section/misson-section.component';
import { InvesterSectionComponent } from './invester-section/invester-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AboutIntroComponent } from './about/about-intro/about-intro.component';
import { AboutFirstColumnComponent } from './about/about-first-column/about-first-column.component';
import { PontesLeadershipComponent } from './pontes-leadership/pontes-leadership.component';
import { PontesAwardsComponent } from './pontes-awards/pontes-awards.component';
import { PontesInvestorsComponent } from './pontes-investors/pontes-investors.component';
import { routing } from './app.routing';
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { ContactMessagesComponent } from './contact/contact-messages/contact-messages.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CommentComponent } from './comment/comment.component';
import { LetterComponent } from './checkin/letter/letter.component';
import { NewLetterFromComponent } from './checkin/new-letter-from/new-letter-from.component';
// import { ParallaxDirective } from './directives/parallax.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SloganSectionComponent,
    HomeComponent,
    ProgramsComponent,
    ProgramTopComponent,
    FirstProgramComponent,
    ContactComponent,
    DonationComponent,
    AwardSectionComponent,
    MissonSectionComponent,
    InvesterSectionComponent,
    FooterComponent,
    AboutComponent,
    AboutIntroComponent,
    AboutFirstColumnComponent,
    CheckinComponent,
    PontesLeadershipComponent,
    PontesAwardsComponent,
    PontesInvestorsComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    ContactFormComponent,
    ContactMapComponent,
    ContactMessagesComponent,
    ImageCarouselComponent,
    CommentComponent,
    LetterComponent,
    NewLetterFromComponent
    // ParallaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ParticlesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
