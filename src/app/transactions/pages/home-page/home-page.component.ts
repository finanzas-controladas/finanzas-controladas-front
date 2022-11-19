import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nuevaTransacción(pageName: string): void{
    this.router.navigate([''])
  }

  ingreso(): void{
    this.router.navigate(['income/add'])
  }

  gasto(): void{
    this.router.navigate(['expense/add'])
  }

}
