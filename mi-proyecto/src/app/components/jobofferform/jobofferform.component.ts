import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-jobofferform',
  templateUrl: './jobofferform.component.html',
  styleUrls: ['./jobofferform.component.css'],
})
export class JobOfferFormComponent {
  constructor(private firebaseService: FirebaseService) {}

  enviarOferta(): void {
    // Capturar los valores de los campos del formulario
    const titulo = (document.getElementById('tituloOferta') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcionOferta') as HTMLInputElement).value;
    const tipo = (document.getElementById('tipoOferta') as HTMLSelectElement).value;
    const sector = (document.getElementById('sectorOferta') as HTMLSelectElement).value;
    const experiencia = (document.getElementById('experienciaOferta') as HTMLSelectElement).value;
    const ubicacion = (document.getElementById('ubicacionOferta') as HTMLInputElement).value;
    const salario = (document.getElementById('salarioOferta') as HTMLInputElement).value;

    // Validar campos vacíos
    if (!titulo || !descripcion || !tipo || !sector || !experiencia || !ubicacion || !salario) {
      alert('Por favor, completa todos los campos antes de enviar la oferta.');
      return;
    }

    // Crear el objeto de oferta
    const oferta = {
      titulo,
      descripcion,
      tipo,
      sector,
      experiencia,
      ubicacion,
      salario,
    };

    // Enviar a Firebase
    this.firebaseService.agregarOferta(oferta).then(() => {
      alert('La oferta ha sido registrada correctamente. ¡Gracias!');

      // Reiniciar los valores de los campos del formulario
      (document.getElementById('tituloOferta') as HTMLInputElement).value = '';
      (document.getElementById('descripcionOferta') as HTMLInputElement).value = '';
      (document.getElementById('tipoOferta') as HTMLSelectElement).value = 'Tiempo completo';
      (document.getElementById('sectorOferta') as HTMLSelectElement).value = 'Tech';
      (document.getElementById('experienciaOferta') as HTMLSelectElement).value = 'Menos de 1 año';
      (document.getElementById('ubicacionOferta') as HTMLInputElement).value = 'Valencia';
      (document.getElementById('salarioOferta') as HTMLInputElement).value = '';
    });
  }
}
