import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrarComponent } from './Components/form/registrar/registrar.component';
import { CalcularComponent } from './Components/form/calcular/calcular.component';

const routes: Routes = [
{
  path:'', component:HomeComponent
},
{
  path:'formulario', component:FormComponent
}
,
{
  path:'registrar', component:RegistrarComponent
},
{
  path:'calcular', component:CalcularComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
