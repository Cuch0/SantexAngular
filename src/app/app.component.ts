import { Component } from '@angular/core';
interface Productos {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    mostrar: boolean = true;

    productos: Productos[] = [
        { "nombre": "Arroz", "costo": "50" },
        { "nombre": "Lentejas", "costo": "30"},
        { "nombre": "Leche", "costo": "25" },
        { "nombre": "Pan", "costo": "12" },
        { "nombre": "Huevos", "costo": "20" },
        { "nombre": "Aceite", "costo": "40" },
        { "nombre": "Azúcar", "costo": "15" },
        { "nombre": "Café", "costo": "28" },
        { "nombre": "Harina", "costo": "22" },
        { "nombre": "Fideos", "costo": "18" }
    ];

    mostrarTabla(): void {

        this.mostrar = !this.mostrar;

    }
    

}


