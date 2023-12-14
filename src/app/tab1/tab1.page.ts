import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
Perfil= {
  usuario:"", 
  contraseña: ""
}
public nombre: string = "";
public contrasena: string = "";

public botonPresionado: boolean = false;
mensajeVisible: boolean = false;

toggleBotonPresionado() {
  this.nombre = "";
  this.contrasena = "";
  this.botonPresionado = !this.botonPresionado;
}

mostrarMensaje() {
  this.mensajeVisible = true;
}
}
