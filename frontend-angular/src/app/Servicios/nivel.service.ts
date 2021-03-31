import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // Para hacer las petciones htpp al backend

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  url = '/api/nivel'; // Ruta del backend donde esta la api que captura las humedades, 
  // la urlbase "localhost:3000/" está en proxy.conf.json
 
  constructor(private http: HttpClient) { }

  // Get Todos los Niveles
  getNiveles()
  {
    return this.http.get(this.url);
  }
}

export interface Nivel{
  id?:string;
  ENG?:string;
}
