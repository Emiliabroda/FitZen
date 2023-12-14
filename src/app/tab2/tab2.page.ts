import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categoria';
import { CATEGORIA } from '../core/constants/categoria';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categorias: Categoria[] = CATEGORIA
  ngOnInit(): void {
  }



}

