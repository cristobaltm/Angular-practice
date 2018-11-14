import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe-list',
    templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

    term:string = '';
    list:Heroe[] = [];

    constructor(
        private activated_route: ActivatedRoute,
        private heroes_service: HeroesService,
        private router: Router
    ) {
        
    }

    ngOnInit() {
         this.activated_route.params.subscribe(params => {
             this.term = params['term'];
             this.list = this.heroes_service.buscarHeroes( params['term']  );           
        });
    }

    verHeroe( id:number ) {
        this.router.navigate( ['/heroe', id] );
    }
}
