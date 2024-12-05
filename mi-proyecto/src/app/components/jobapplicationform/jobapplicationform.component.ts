import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-jobapplicationform',
  templateUrl: './jobapplicationform.component.html',
  styleUrls: ['./jobapplicationform.component.css'],
})
export class JobApplicationFormComponent {
  constructor(private firebaseService: FirebaseService) {}

  enviarDemanda(): void {
    // Obtener valores de los campos del formulario
    const nombre = (document.getElementById('nombreDemanda') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcionDemanda') as HTMLInputElement).value;
    const sector = (document.getElementById('sectorDemanda') as HTMLSelectElement).value;
    const tipo = (document.getElementById('tipoDemanda') as HTMLSelectElement).value;
    const experiencia = (document.getElementById('experienciaDemanda') as HTMLSelectElement).value;
    const ubicacion = (document.getElementById('ubicacionDemanda') as HTMLSelectElement).value;

    // Validar campos vacíos
    if (!nombre || !descripcion || !sector || !tipo || !experiencia || !ubicacion) {
      alert('Por favor, completa todos los campos antes de enviar el formulario.');
      return;
    }

    // Crear el objeto de demanda
    const demanda = {
      nombre,
      descripcion,
      sector,
      tipo,
      experiencia,
      ubicacion,
    };

    // Enviar a Firebase
    this.firebaseService.agregarDemanda(demanda).then(() => {
      // Reiniciar valores del formulario
      (document.getElementById('nombreDemanda') as HTMLInputElement).value = '';
      (document.getElementById('descripcionDemanda') as HTMLInputElement).value = '';
      (document.getElementById('sectorDemanda') as HTMLSelectElement).value = 'Tech';
      (document.getElementById('tipoDemanda') as HTMLSelectElement).value = 'Tiempo completo';
      (document.getElementById('experienciaDemanda') as HTMLSelectElement).value = 'Menos de 1 año';
      (document.getElementById('ubicacionDemanda') as HTMLSelectElement).value = 'Valencia';
    });
  }
}
