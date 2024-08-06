import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"cart",component:CartComponent},
    {path:"about",component:AboutComponent}
];
