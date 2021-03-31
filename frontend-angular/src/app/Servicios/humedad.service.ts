import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // Para hacer las petciones htpp al backend

@Injectable({
  providedIn: 'root'
})
export class HumedadService {

  url = '/api/humedad'; // Ruta del backend donde esta la api que captura las humedades, 
  // la urlbase "localhost:3000/" está en proxy.conf.json
  constructor(private http: HttpClient) {}


    // Get Todas las Humedades
    getHumedades()
    {
      return this.http.get(this.url);
    }

    // Get una sola Humedad
    getUnaHumedad(id:string)
    {
      return this.http.get(this.url+'/'+id);
    }

    // Agregar una humedad
    addHumedad(humedad:Humedad)
    {
      return this.http.post(this.url, humedad);
    }

    // Eliminar una humedad
    deleteHumedad(id:string)
    {
      return this.http.delete(this.url+'/'+id);
    }
}

export interface Humedad{
  id?:string;
  ENG?:string;
}
