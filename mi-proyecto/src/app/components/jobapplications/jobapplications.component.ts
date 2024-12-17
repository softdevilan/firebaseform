import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobapplications',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './jobapplications.component.html',
  styleUrl: './jobapplications.component.css'
})
export class JobApplicationsComponent {
  form: FormGroup;
  applications: any[] = []; // Contendrá todas las ofertas cargadas desde Firebase
  filteredApplications: any[] = []; // Ofertas filtradas según el formulario
  formSubmitted: boolean = false;

  constructor(private firebaseService: FirebaseService, private fb: FormBuilder) {
    // Inicialización del formulario
    this.form = this.fb.group({
      sector: [''],
      ubicacion: [''],
      tipo: [''],
      experiencia: [''],
      descripcion: [''],
    });
  }

  ngOnInit(): void {
    // Carga inicial de las demandas desde Firebase
    this.loadApplications();
  }

  // Método para cargar todas las demandas desde el servicio Firebase
  loadApplications(): void {
    this.firebaseService.obtenerDemandas().then((demandas) => {
      this.applications = demandas; // Guardar todas las demandas cargadas
      this.filteredApplications = [...this.applications]; // Inicialmente, todas las demandas están visibles
    }).catch((error) => {
      console.error('Error al cargar demandas:', error);
    });
  }

  // Método para buscar y filtrar demandas basadas en el formulario
  buscarDemanda(): void {
    const filters = this.form.value;

    this.filteredApplications = this.applications.filter((demanda) => {
      return (
        (!filters.sector || demanda.sector === filters.sector) &&
        (!filters.ubicacion || demanda.ubicacion === filters.ubicacion) &&
        (!filters.tipo || demanda.tipo === filters.tipo) &&
        (!filters.experiencia || demanda.experiencia === filters.experiencia) &&
        (!filters.descripcion || (demanda.descripcion?.toLowerCase().includes(filters.descripcion.toLowerCase())))

      );
    });

    this.formSubmitted = true;
  }

  // Getter para contar las demandas filtradas
  get totalDemandas(): number {
    return this.filteredApplications.length;
  }

  // Método para limpiar filtros y restablecer demandas
  limpiarFiltros(): void {
    this.form.reset({
      sector: '',
      ubicacion: '',
      tipo: '',
      experiencia: '',
      descripcion: ''
    });
    this.filteredApplications = [...this.applications];
  }

}
