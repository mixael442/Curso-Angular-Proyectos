import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[customMin] [ngModel]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting: CustomMindDirective,
        multi:true
    }]
})
export class CustomMindDirective implements Validator{
    @Input() minimo!:number;

    constructor(){
        console.log('directiva', this.minimo)
    }
    validate(control:any) {
        const inputValue=control;
        return (inputValue < this.minimo) ? {'custom':true}: null
    }

}