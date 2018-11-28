import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';

// Routes
import {APP_ROUTING} from './app.routes';
import {PaisesComponent} from './components/paises/paises.component';

// Services
//import { SpotifyService } from './services/spotify.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistComponent,
        NavbarComponent,
        PaisesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(APP_ROUTING, {useHash: true})
    ],
    providers: [
//        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
