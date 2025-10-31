import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Configuración global de la app: router, formularios reactivos y Firebase/Firestore.

const firebaseConfig = {
  // Es la configuración del proyecto en Firebase.
  apiKey: "AIzaSyB8iepuqPzEwF23y6wFaVv7iTv2gr13O9E",
  authDomain: "anarchy-wall-street.firebaseapp.com",
  projectId: "anarchy-wall-street",
  storageBucket: "anarchy-wall-street.appspot.com",
  messagingSenderId: "1070300594025",
  appId: "1:1070300594025:web:7b2d85ce6e8c26ca6dc7f8",
  measurementId: "G-551PL8HPS3"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // módulos clásicos van dentro de importProvidersFrom
    importProvidersFrom(ReactiveFormsModule),

    // providers modernos se listan directamente
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};