import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        // This is how we lazy load a module accessing a specific route
        path: 'about-us',
        loadChildren: () => 
            import('./modules/about-us/about-us.module').then(
                (m) => m.AboutUsModule
            ),
    }
];
