import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-joboffers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './joboffers.component.html',
  styleUrls: ['./joboffers.component.css'],
  providers: [FormBuilder],
})
export class JobOffersComponent implements OnInit {
  form: FormGroup;
  offers: any[] = []; // Contendrá todas las ofertas cargadas desde Firebase
  filteredOffers: any[] = []; // Ofertas filtradas según el formulario

  formSubmitted: boolean = false;

  constructor(private firebaseService: FirebaseService, private fb: FormBuilder) {
    // Inicialización del formulario
    this.form = this.fb.group({
      salario: [''],
      sector: [''],
      ubicacion: [''],
      tipo: [''],
      experiencia: [''],
      titulo: [''],
    });
  }

  ngOnInit(): void {
    // Carga inicial de las ofertas desde Firebase
    this.loadOffers();
  }

  // Método para cargar todas las ofertas desde el servicio Firebase
  loadOffers(): void {
    this.firebaseService.obtenerOfertas().then((ofertas) => {
      this.offers = ofertas; // Guardar todas las ofertas cargadas
      this.filteredOffers = [...this.offers]; // Inicialmente, todas las ofertas están visibles
    }).catch((error) => {
      console.error('Error al cargar ofertas:', error);
    });
  }

  // Método para buscar y filtrar ofertas basadas en el formulario
  buscarOferta(): void {
    const filters = this.form.value;

    this.filteredOffers = this.offers.filter((oferta) => {
      return (
        (!filters.salario || oferta.salario >= filters.salario) &&
        (!filters.sector || oferta.sector === filters.sector) &&
        (!filters.ubicacion || oferta.ubicacion === filters.ubicacion) &&
        (!filters.tipo || oferta.tipo === filters.tipo) &&
        (!filters.experiencia || oferta.experiencia === filters.experiencia) &&
        (!filters.titulo || oferta.titulo.toLowerCase().includes(filters.titulo.toLowerCase()))
      );
    });

    this.formSubmitted = true;
  }

  // Getter para contar las demandas filtradas
  get totalOfertas(): number {
    return this.filteredOffers.length;
  }

  limpiarFiltros(): void {
    this.form.reset({
      salario: '',
      sector: '',
      ubicacion: '',
      tipo: '',
      experiencia: '',
      titulo: ''
    });
    this.filteredOffers = [...this.offers];
  }
}
