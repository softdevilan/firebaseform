import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app = initializeApp(environment.firebaseConfig);
  private database = getDatabase(this.app);

  // Agregar una oferta de empleo
  agregarOferta(oferta: {
    titulo: string;
    descripcion: string;
    tipo: string;
    sector: string;
    experiencia: string;
    ubicacion: string;
    salario: string;
  }): Promise<void> {
    const ofertasRef = ref(this.database, 'ofertas');
    return push(ofertasRef, oferta)
      .then(() => alert('La oferta ha sido registrada correctamente. ¡Gracias!'))
      .catch((error) => alert(`Error al agregar la oferta: ${error.message}`));
  }

  // Agregar una demanda de empleo
  agregarDemanda(demanda: {
    nombre: string;
    sector: string;
    tipo: string;
    experiencia: string;
    ubicacion: string;
  }): Promise<void> {
    const demandasRef = ref(this.database, 'demandas');
    return push(demandasRef, demanda)
      .then(() => alert('La solicitud ha sido registrada correctamente. ¡Gracias y buena suerte!'))
      .catch((error) => alert(`Error al agregar la demanda: ${error.message}`));
  }
}
