import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-paises',
    templateUrl: './paises.component.html',
    styles: []
})
export class PaisesComponent implements OnInit {

    lang: string = '';
    total: number = 0;
    paises: any[] = [];

    constructor(
        private http: HttpClient,
        private activated_route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.activated_route.params.subscribe(params => {
            this.lang = params['lang'];
            let url: string = 'https://restcountries.eu/rest/v2/lang/' + this.lang;
            this.http.get(url).subscribe((data: any) => {
                this.paises = data;
                this.total = data.length;
//                if(this.total == 0) {
//                    this.paises[0]['name'] = "No existen países para ese lenguaje";
//                    this.paises[0]['population'] = 0;
//                }
            });
        });
    }

}
