import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto:string;
  cantidad:number;
  formularioIncorrecto:boolean;
  textoIncorrecto:string;
  constructor(private _presupuestosService:PresupuestoService)
  {
    this.nombreGasto='';
    this.cantidad=0;
    this.formularioIncorrecto=false;
    this.textoIncorrecto=''

  }
  ngOnInit(): void {
   
  }
agregarGasto()
{
  if (this.cantidad > this._presupuestosService.restante)
  {
    this.formularioIncorrecto=true;
    this.textoIncorrecto='Cantidad ingresada es mayor al restante'
    return;//salgode este if con el return
  }
  if(this.nombreGasto==''|| this.cantidad<=0)
  {
    this.formularioIncorrecto=true;
    this.textoIncorrecto='Nombre gasto o cantidad incorrecta'
  }
  else{

    //creamos el objecto
    const GASTO={
      nombre:this.nombreGasto,
      cantidad:this.cantidad
    }
    //enviamos el objectos a los suscriptores via subject
    this._presupuestosService.agregarGasto(GASTO)
    //reseteamos formulario
    this.formularioIncorrecto=false;
    this.nombreGasto='';
    this.cantidad=0;
  }
}
}
