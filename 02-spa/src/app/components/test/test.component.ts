import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
    mostrar = true;

    frase: any = {
        mensaje: "Un gran poder requiere una gran responsabilidad",
        autor: "Ben Parker"
    }

    personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus", "Duende Verde", "Hombre de arena"]
}
