import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // Para hacer las petciones htpp al backend


@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  url = '/api/temperatura'; // Ruta del backend donde esta la api que captura las humedades, 
  // la urlbase "localhost:3000/" está en proxy.conf.json
  
  constructor(private http: HttpClient) { }

  // Get Todas las Temperaturas
  getTemperaturas()
  {
    return this.http.get(this.url);
  }
}

export interface Temperatura{
  id?:string;
  ENG?:string;
}