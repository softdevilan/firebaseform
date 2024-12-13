import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-jobapplications',
  standalone: true,
  imports: [],
  templateUrl: './jobapplications.component.html',
  styleUrl: './jobapplications.component.css'
})
export class JobApplicationsComponent {
  constructor(private firebaseService: FirebaseService) {}

}
