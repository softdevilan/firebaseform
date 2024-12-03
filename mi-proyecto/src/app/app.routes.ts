import { Routes } from '@angular/router';
import { JobapplicationformComponent } from './components/jobapplicationform/jobapplicationform.component';
import { JobofferformComponent } from './components/jobofferform/jobofferform.component';

export const routes: Routes = [
    { path: '', redirectTo: 'job-application', pathMatch: 'full' },
    { path:'job-application', component: JobapplicationformComponent },
    { path: 'job-offer', component:JobofferformComponent }
];
