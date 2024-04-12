import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component:LayoutComponent,
    children:[
      {
        path: "home",
        component:HomeComponent
      },
      {
        path: "women",
        component:WomenComponent
      },
      {
        path: "men",
        component:MenComponent
      },
      {
        path: "products",
        component:ProductsComponent
      },
      {
        path: "about",
        component:AboutComponent
      },
      {
        path: "**",
        component:NotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
