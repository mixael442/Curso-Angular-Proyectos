import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [,Validators.required, Validators.minLength(4),],
    favoritos: this.fb.array([['Metal Gear'], ['Cyberpunk']], Validators.required)
  })

  get favoritosarr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder ) { }

  campoNoValido(nombre:string){
    return this.miFormulario.controls[nombre].errors
           && this.miFormulario.controls[nombre].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
     this.miFormulario.markAllAsTouched()
      return;
    }
  }

}
