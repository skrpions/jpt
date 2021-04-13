import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// debounceTime sirve para reaccionar después de un tiempo de inactividad dentro del formulario
import {debounceTime} from 'rxjs/operators'; 
import { Indice, IndiceambientalService } from '../../Servicios/indiceambiental.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { from } from 'rxjs';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  resultadonumerico : number;

  // Creo un modelo indice y lo inicializo 
  indiceambi : Indice={
    id:'',
    temperatura:'',
    humedad:'',
    nivel:'',
    indice:''
  };


  // Declaro una instancia para controlar todo el formulario
  formulario : FormGroup

  // Variable para recibir todo el contenido del Json
  conversion : any;

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private IndiceambientalService:IndiceambientalService, private location: Location, private router:Router ) {
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
      nivel: ['', [Validators.required,Validators.maxLength(15)]],
    });

    // Evalua cambios cada 500 milisegundos
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


  // Metodo que envia el formulario al Backend en Formato Json directamente
  calcular_ecuacion(event: Event)
  {
    // Cancelo el refresh nativo de html de toda la página
    event.preventDefault();
    
    // Pregunto si el formulario es válido
    if(this.formulario.valid)
    {

      // Convierto a números el string que viene del input Temperatura 
      var stringtemperatura = this.indiceambi.temperatura;
      var cantidadtemperatura = Number(stringtemperatura);

      // Convierto a números el string que viene del input humedad 
      var stringhumedad = this.indiceambi.humedad;
      var cantidadhumedad = Number(stringhumedad);

      // Convierto a números el string que viene del input nivel 
      var stringnivel = this.indiceambi.nivel;
      var cantidadnivel = Number(stringnivel);

      // Calculo la ecuación
      var resultado = (cantidadtemperatura*0.5)+(cantidadhumedad*0.15)+(cantidadnivel*0.2)
      this.resultadonumerico = resultado;
      
      
      // Convierto a String el resultado para poder enviarlo, ya que en el Service esta como String 
      this.indiceambi.indice = resultado.toString();
    
      
      // Elimino el id porque en la bd es autoincrement
      delete this.indiceambi.id;    // Este es el primer atributo del modelo creado
    
      this.indiceambi.temperatura;  // Este es el segundo atributo del modelo creado
      this.indiceambi.humedad;      // Este es el tercer atributo del modelo creado
      this.indiceambi.nivel;        // Este es el cuarto atributo del modelo creado
      this.indiceambi.indice;       // Este es el quinto atributo del modelo creado
      this.IndiceambientalService.addIndice(this.indiceambi).subscribe(); // Agrego todos los datos que tenga el modelo indice creado.
      
      // Refresco la ruta para que se actualice la grafica
      //this.router.navigate(['/indiceambiental/list']);

    }
    else{
      // Si el formulario no es válido entonces Activo todos los errores en el formulario
      this.formulario.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  }
}
