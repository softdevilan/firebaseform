import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-jobapplicationform',
  templateUrl: './jobapplicationform.component.html',
  styleUrls: ['./jobapplicationform.component.css'],
})
export class JobApplicationFormComponent {
  demanda = {
    nombre: '',
    sector: 'Tech',
    tipo: 'Tiempo completo',
    experiencia: 'Menos de 1 año',
    ubicacion: 'Valencia',
  };

  constructor(private firebaseService: FirebaseService) {}

  enviarDemanda(): void {
    const { nombre, sector, tipo, experiencia, ubicacion } = this.demanda;

    // Validar campos vacíos
    if (!nombre || !sector || !tipo || !experiencia || !ubicacion) {
      alert('Por favor, completa todos los campos antes de enviar el formulario.');
      return;
    }

    // Enviar a Firebase
    this.firebaseService.agregarDemanda(this.demanda).then(() => {
      alert('La solicitud ha sido registrada correctamente. ¡Gracias y buena suerte!');
      // Reiniciar formulario
      this.demanda = {
        nombre: '',
        sector: 'Tech',
        tipo: 'Tiempo completo',
        experiencia: 'Menos de 1 año',
        ubicacion: 'Valencia',
      };
    });
  }
}
