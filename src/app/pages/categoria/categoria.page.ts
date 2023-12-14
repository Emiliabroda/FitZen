import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA } from 'src/app/core/constants/categoria';
import { Producto } from 'src/app/core/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage {
  categoriasActual = CATEGORIA[0];
 

  constructor(
    private activatedRoute: ActivatedRoute,
    public productoService: ProductoService
  ) {
    activatedRoute.params.subscribe(params => {
      const categoriaEncontrada = CATEGORIA.find(categoria => categoria.id == params["id"]);
      if (categoriaEncontrada) {
        this.categoriasActual = categoriaEncontrada;
      } 

    }
    )

  }

}
