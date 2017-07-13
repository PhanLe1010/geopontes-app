import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component' ;
import {ProgramsComponent} from './programs/programs.component' ;
import {ContactComponent} from './contact/contact.component' ;
import {DonationComponent} from './donation/donation.component' ;
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';
import { AwardSectionComponent } from './award-section/award-section.component';
import { MissonSectionComponent } from './misson-section/misson-section.component';
import { InvesterSectionComponent } from './invester-section/invester-section.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "programs", component: ProgramsComponent},
  {path: "contact", component: ContactComponent},
  {path: "donation", component: DonationComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SloganSectionComponent,
    HomeComponent,
    ProgramsComponent,
    ContactComponent,
    DonationComponent,
    AwardSectionComponent,
    MissonSectionComponent,
    InvesterSectionComponent,
    FooterComponent
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
