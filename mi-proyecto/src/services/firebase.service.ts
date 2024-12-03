import { Injectable } from '@angular/core';
import { Database, ref, set, push, get, child } from 'firebase/database';
import { getDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db: Database;

  constructor() {
    this.db = getDatabase();
  }

  // Método para agregar una oferta de empleo
  addJobOffer(title: string, type: string, company: string) {
    const newJobRef = push(ref(this.db, 'jobOffers'));
    return set(newJobRef, {
      title,
      type,
      company,
    });
  }

  // Método para agregar una solicitud de empleo
  addJobApplication(name: string, email: string, jobId: string) {
    const newApplicationRef = push(ref(this.db, 'jobApplications'));
    return set(newApplicationRef, {
      name,
      email,
      jobId,
    });
  }

  // Método para obtener todas las ofertas de empleo
  getJobOffers(): Observable<any[]> {
    const offersRef = ref(this.db, 'jobOffers');
    return new Observable((observer) => {
      get(offersRef).then((snapshot) => {
        if (snapshot.exists()) {
          const offers = Object.values(snapshot.val());
          observer.next(offers);
        } else {
          observer.next([]);
        }
      }).catch(err => observer.error(err));
    });
  }

  // Método para obtener todas las solicitudes de empleo
  getJobApplications(): Observable<any[]> {
    const applicationsRef = ref(this.db, 'jobApplications');
    return new Observable((observer) => {
      get(applicationsRef).then((snapshot) => {
        if (snapshot.exists()) {
          const applications = Object.values(snapshot.val());
          observer.next(applications);
        } else {
          observer.next([]);
        }
      }).catch(err => observer.error(err));
    });
  }
}
