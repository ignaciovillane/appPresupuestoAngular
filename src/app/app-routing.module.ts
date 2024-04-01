import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
//Coponentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes:Routes=[
  {path:'',redirectTo:'/ingresarPresupuesto',pathMatch:'full'},//si ingresa a localhost:4200 direcciona al componente ingresar gasto compara por la ruta completa con pathMatch
  {path:'ingresarPresupuesto',component:IngresarPresupuestoComponent},
  {path:'gastos',component:GastosComponent},
  {path:'**',redirectTo:'/ingresarPresupuesto',pathMatch:'full'}//redirecciono si elusuario ingresa una ruta no valida
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
