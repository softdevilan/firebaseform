import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms'; 
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core'; 

const firebaseConfig = {
  apiKey: "AIzaSyDGovK0SAHMZ6ZXE1V_5DGp5xzNG9LeTcU",
  authDomain: "formulario-7280b.firebaseapp.com",
  databaseURL: "https://formulario-7280b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "formulario-7280b",
  storageBucket: "formulario-7280b.firebasestorage.app",
  messagingSenderId: "274436337945",
  appId: "1:274436337945:web:cf1e7dccb3d105f385d588",
  measurementId: "G-4R4K2D85KE"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
    FormsModule, 
    importProvidersFrom(FormsModule)
  ],
};
