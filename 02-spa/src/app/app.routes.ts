
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { TestComponent } from './components/test/test.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'buscar/:term', component: BuscarComponent },
    { path: 'test', component: TestComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// Para usar # en las rutas
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });