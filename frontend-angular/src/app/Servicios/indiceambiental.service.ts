import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndiceambientalService {

  urllistar = '/api/indiceambiental/list';       // Ruta del backend donde esta la api que captura las humedades, 
  urlregistrar = '/api/indiceambiental/create';  // Ruta del backend donde se pueden registrar los datos, 
  // la urlbase "localhost:3000/" está en proxy.conf.json
  
  constructor(private http: HttpClient) { }

  // Get Todos los indices ambientales
  getIndicesAmbientales()
  {
    return this.http.get(this.urllistar);
  }

   // Agregar un indice ambiental
   addIndice(indiceambiental:Indice)
   {
     return this.http.post(this.urlregistrar, indiceambiental);
   }
}

// Exporto la interfaz para validar los datos del formulario
export interface Indice{
  id?:string;
  temperatura?:string;
  humedad?:string;
  nivel?:string;
  indice?:string;
}

