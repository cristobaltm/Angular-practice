import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    constructor( private http: HttpClient ) {
    }
    getNewReleases() {
        let limit:number = 20;
        let url_spotify:string = 'https://api.spotify.com/v1/browse/new-releases?limit=' + limit;
        let token:string = "BQDuUTNX9bbwShqjiBVcdIuVqUhtiF6j5EpYw4PIvw9TmUFk_CONV8jAbSvaj3WjDNWe7XckP3l6jQgwDEU";
        
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + token
        });
                
        return this.http.get(url_spotify, { headers });
    }
}
