import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent} from './contact/contact.component' ;
import { DonationComponent} from './donation/donation.component' ;
import { CheckinComponent } from './checkin/checkin.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "programs", component: ProgramsComponent},
  {path: "contact", component: ContactComponent},
  {path: "donation", component: DonationComponent},
  {path: "about", component: AboutComponent},
  {path: "checkin", component: CheckinComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

