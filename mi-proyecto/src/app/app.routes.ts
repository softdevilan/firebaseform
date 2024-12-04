import { Routes } from '@angular/router';
import { JobApplicationFormComponent } from './components/jobapplicationform/jobapplicationform.component';
import { JobOfferFormComponent } from './components/jobofferform/jobofferform.component';


export const routes: Routes = [
    { path: '', redirectTo: 'job-application', pathMatch: 'full' },
    { path:'job-application', component: JobApplicationFormComponent },
    { path: 'job-offer', component:JobOfferFormComponent }
];
