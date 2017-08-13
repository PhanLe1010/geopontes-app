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
import { AuthenticationComponent } from './auth/authentication/authentication.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
