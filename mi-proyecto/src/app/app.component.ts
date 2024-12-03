import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables para almacenar las ofertas de empleo y las solicitudes de empleo
  jobOffers: any[] = [];
  jobApplications: any[] = [];
  
  // Variables para los formularios de ofertas de empleo y solicitudes de empleo
  jobTitle: string = '';
  jobType: string = '';
  company: string = '';
  
  applicantName: string = '';
  applicantEmail: string = '';
  jobId: string = '';

  constructor(private firebaseService: FirebaseService) {
    this.loadData();
  }

  // Método para agregar una oferta de empleo
  addJobOffer() {
    this.firebaseService
      .addJobOffer(this.jobTitle, this.jobType, this.company)
      .then(() => {
        // Limpiar los campos del formulario después de agregar la oferta
        this.jobTitle = '';
        this.jobType = '';
        this.company = '';
      })
      .catch(console.error);
  }

  // Método para agregar una solicitud de empleo
  addJobApplication() {
    this.firebaseService
      .addJobApplication(this.applicantName, this.applicantEmail, this.jobId)
      .then(() => {
        // Limpiar los campos del formulario después de agregar la solicitud
        this.applicantName = '';
        this.applicantEmail = '';
        this.jobId = '';
      })
      .catch(console.error);
  }

  // Método para cargar las ofertas y solicitudes desde Firebase
  loadData() {
    this.firebaseService.getJobOffers().subscribe((offers) => {
      this.jobOffers = offers;
    });
    this.firebaseService.getJobApplications().subscribe((applications) => {
      this.jobApplications = applications;
    });
  }
}
