import { Routes } from '@angular/router';
import { JobApplicationFormComponent } from './components/jobapplicationform/jobapplicationform.component';
import { JobOfferFormComponent } from './components/jobofferform/jobofferform.component';
import { JobApplicationsComponent } from './components/jobapplications/jobapplications.component';
import { JobOffersComponent } from './components/joboffers/joboffers.component';


export const routes: Routes = [
    { path: '', redirectTo: 'applications', pathMatch: 'full' },
    { path:'applications', component: JobApplicationsComponent },
    { path:'application-form', component: JobApplicationFormComponent },
    { path: 'offers', component:JobOffersComponent },
    { path: 'offer-form', component:JobOfferFormComponent }
];
