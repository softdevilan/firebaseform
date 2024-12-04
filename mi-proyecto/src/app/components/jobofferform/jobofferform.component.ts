import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-jobofferform',
  templateUrl: './jobofferform.component.html',
  styleUrls: ['./jobofferform.component.css'],
})
export class JobOfferFormComponent {
  oferta = {
    titulo: '',
    descripcion: '',
    tipo: 'Tiempo completo',
    sector: 'Tech',
    experiencia: 'Menos de 1 año',
    ubicacion: 'Valencia',
    salario: '',
  };

  constructor(private firebaseService: FirebaseService) {}

  enviarOferta(): void {
    const { titulo, descripcion, tipo, sector, experiencia, ubicacion, salario } = this.oferta;

    // Validar campos vacíos
    if (!titulo || !descripcion || !tipo || !sector || !experiencia || !ubicacion || !salario) {
      alert('Por favor, completa todos los campos antes de enviar la oferta.');
      return;
    }

    // Enviar a Firebase
    this.firebaseService.agregarOferta(this.oferta).then(() => {
      alert('La oferta ha sido registrada correctamente. ¡Gracias!');
      // Reiniciar formulario
      this.oferta = {
        titulo: '',
        descripcion: '',
        tipo: 'Tiempo completo',
        sector: 'Tech',
        experiencia: 'Menos de 1 año',
        ubicacion: 'Valencia',
        salario: '',
      };
    });
  }
}
