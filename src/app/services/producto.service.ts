import { Injectable } from '@angular/core';
import { Producto } from '../core/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

clases: Producto[] = []

agregarReserva(clase: Producto){
  const productoExistente = this.clases.find(p => p.id == clase.id);
  if(!productoExistente) {
  this.clases.push(clase);
  console.log(this.clases)

  if(clase.dias.includes("Lunes")){
    this.lunes.push(clase.actividad)
  }
  if(clase.dias.includes("Martes")){
    this.martes.push(clase.actividad)
  } 
  if(clase.dias.includes("Miercoles")){
    this.miercoles.push(clase.actividad)
  } 
  if(clase.dias.includes("Jueves")){
    this.jueves.push(clase.actividad)
  } 
  if(clase.dias.includes("Viernes")){
    this.viernes.push(clase.actividad)
  }
  if(clase.dias.includes("Sabado")){
    this.sabado.push(clase.actividad)
  } }
  
  else {

    console.log('Ya has reservado este pack')
  }
 }


 
 lunes:string[] = [];
 martes:string[] = [];
 miercoles:string[] = [];
 jueves:string[] = [];
 viernes:string[] = [];
 sabado:string[] = [];


}
