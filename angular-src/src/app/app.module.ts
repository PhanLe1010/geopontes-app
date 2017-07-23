import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component' ;
import {ProgramsComponent} from './programs/programs.component' ;
import {ProgramTopComponent} from './programTop/programTop.component' ;
import {FirstProgramComponent} from './FirstProgram/FirstProgram.component' ;
import {ContactComponent} from './contact/contact.component' ;
import {DonationComponent} from './donation/donation.component' ;
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';
import { AwardSectionComponent } from './award-section/award-section.component';
import { MissonSectionComponent } from './misson-section/misson-section.component';
import { InvesterSectionComponent } from './invester-section/invester-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutFirstColumnComponent } from './about-first-column/about-first-column.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "programs", component: ProgramsComponent},
  {path: "contact", component: ContactComponent},
  {path: "donation", component: DonationComponent},
  {path: "about", component: AboutComponent}
]


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
    AboutFirstColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
