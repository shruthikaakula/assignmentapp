import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { CharcoalComponent } from './charcoal/charcoal.component';

import { HomeComponent } from './home/home.component';
import { OilComponent } from './oil/oil.component';
import { PencilComponent } from './pencil/pencil.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'acrylic',component:AcrylicComponent},
  
  {path:'oil',component:OilComponent},
  {path:'pencil',component:PencilComponent},
  {path:'charcoal',component:CharcoalComponent},
  {path:'test',component:TestComponent},
  {path:'test/:id',component:UserdetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
