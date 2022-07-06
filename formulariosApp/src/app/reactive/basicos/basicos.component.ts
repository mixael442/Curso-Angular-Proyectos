import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {
  // miFormulario:FormGroup= new FormGroup ({
  //   nombre     : new FormControl('Fernanfloo'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(4)

  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [,[Validators.required, Validators.minLength(3)] ,],
    precio: [,[Validators.required, Validators.min(0)] ,],
    existencias:[,[Validators.required, Validators.min(0)] ,]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.miFormulario.reset({
    nombre:'computadora',
    precio:1200,
   })
    
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;

  }
  
  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
  }

}
