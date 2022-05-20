import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment';
import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  myImage:string = "../assets/resources/HANDYMAN.png"
  minDate: string = '';
  maxDate : string = '';

   public form: FormGroup;

  registrar : any ={};

  constructor(private fb : FormBuilder,private _snackBar: MatSnackBar, private service:RegistrarService ) {
    this.form = this.fb.group({
      idTecnico:['',[Validators.required]],
      idServicio: ['',[Validators.required]],
      fechaI:['',[Validators.required]],
      fechaF: [{value:'', disabled:true},[Validators.required]]
    })
   }

  ngOnInit(): void {

    this.minDate= moment().subtract(7, 'days').format('YYYY-MM-DDThh:mm');
    this.maxDate = moment().format('YYYY-MM-DDThh:mm');


  }
  onChange(){
    if(!this.form.value.fechaI.empty){
        this.form.get('fechaF')?.enable();

    }
  }
  enviar(): any{

    const idTecnico = this.form.value.idTecnico;
    const idServicio = this.form.value.idServicio;
    const fechaI = this.form.value.fechaI;
    const fechaF = this.form.value.fechaF;

    const Datos={
      id:1,
      technicalId: idTecnico,
      requestId: idServicio,
      startDate: fechaI,
      endDate: fechaF
  }
  this.service.getRegistro(Datos).subscribe(response =>{
    console.log(response);
    this.ok();
  })

    // hacer post con el back
    if(idTecnico == '1' && idServicio == '1'){
      //error id tecnico
      this.ok();

    } else if(idServicio == '0' && idTecnico == '0'){
      this.error();
    }
    else if (idServicio == '0'){
      //error id servicio
      this.errorServicio();
    } else if (idTecnico == '0'){
      //Success
      this.errorTecnico();
    }

  }
  error(){
    this._snackBar.open('Id Tecnico e Id Servicio Invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top',
    })
  }

  errorTecnico(){
    this. _snackBar.open('Id Tecnico Invalido','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });
  }
  errorServicio(){
    this._snackBar.open('Id Servicio Invalido','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    })
  }
  ok(){
    this._snackBar.open('Registro Exitoso','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    })
  }

  onClick(){
    alert('Id del tecnico')
  }
}
