import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  
  nombre = 'nombre';
  
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  pi = Math.PI;
  
  numero = 0.234;
  
  salario = 1234.5;
  
  heroe = {
      nombre: "Logan",
      clave: "Wolverine",
      edad: 500,
      direccion: {
          calle: "Bayville",
          ciudad: "Nueva York"
      }
  }
  
  valor_de_promesa = new Promise( (resolve, reject) => {
      setTimeout( () => resolve('Llegó la data'), 3500 );
  });
  
  
  fecha = new Date();
}
