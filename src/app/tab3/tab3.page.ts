import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    public productoService: ProductoService
  ) {}
}
