import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto:number;
  restante:number;
  private gastos$=new Subject<any>;//observable
  constructor() {
    this.presupuesto=0;
    this.restante=0;
   }
   //funcion para actualizar el restatnte
   agregarGasto(gasto:any)
   {
    this.restante=this.restante-gasto.cantidad
    this.gastos$.next(gasto);
   }

   //metodo para suscribir todo los componentes observadores
   getGastos():Observable<any>
   {
     return this.gastos$.asObservable();
   }
}
