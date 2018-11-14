import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent {

    heroe: any = {};

    constructor(
        private activated_route: ActivatedRoute,
        private heroes_service: HeroesService
    ) {
        this.activated_route.params.subscribe(params => {
            this.heroe = this.heroes_service.getHeroe( params['id'] );           
        });
    }

}
