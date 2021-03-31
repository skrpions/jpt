import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// debounceTime sirve para reaccionar después de un tiempo de inactividad dentro del formulario
import {debounceTime} from 'rxjs/operators'; 
import { Indice, IndiceambientalService } from '../../Servicios/indiceambiental.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

   // cantidadone: number;
   cantidadtemperatura = null;
   cantidadhumedad = null;
   cantidadnivel = null;
   resultadoindice = null;

  // Creo un indice y lo inicializo 
  indice : Indice={
    id:'',
    indice:''
  };


  // Declaro una instancia para controlar todo el formulario
  formulario : FormGroup

  // Variable para recibir todo el contenido del Json
  conversion : any;

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private IndiceambientalService:IndiceambientalService, private router:Router ) {
    // Inicialización inmediata  :: ngOnInit se usa frecuentemente para haer peticiones de datos 
    this.buildForm();
   }

   // Hago una instancia del formulario y dentro de un objeto con clave : valor
  // Hay 2 parámetros, el primero es un valor inicial y el segundo un array de validaciones
  private buildForm() {

    // Declaro la validacion del Formulario
    this.formulario = this.formBuilder.group
    ({
      temperatura: ['', [Validators.required]],
      humedad: ['', [Validators.required]],
      indice: ['', [Validators.required]],
      nivel: ['', [Validators.required,Validators.maxLength(15)]],
    });

    this.formulario.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    }); 
  }

  // Limpieza de Código
  // - Recuper los campos para que no sea tan repetitiva el llamado a dichos campos cuando trabaje con los errores
  get temperaturaField(){
    return this.formulario.get('temperatura');
  }
  get humedadField(){
    return this.formulario.get('humedad');
  }
  get nivelField(){
    return this.formulario.get('nivel');
  }
  get indiceField(){
    return this.formulario.get('indice');
  }


  // Metodo que envia el formulario al Backend en Formato Json directamente
  enviar(event: Event)
  {
    // Cancelo el refresh nativo de html de toda la página
    event.preventDefault();
    

    // Pregunto si el formulario es válido
    if(this.formulario.valid)
    {
      delete this.indice.id; // Elimino el id porque en la bd es autoincrement
    
      this.indice.indice;
      this.IndiceambientalService.addIndice(this.indice).subscribe(); // Agrego los datos
      //this.router.navigate(['/indiceambiental/list']); // Una vez registrado me devolvuelvo a la ruta inicial

    }else{
      // Activo todos los errores en el formulario
      this.formulario.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  }

}
