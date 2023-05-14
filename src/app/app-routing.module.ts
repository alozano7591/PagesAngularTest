import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import {HomeComponent} from "./components/home/home.component";
import {NavComponent} from "./components/nav/nav.component";
import {FooterComponent} from "./components/footer/footer.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
