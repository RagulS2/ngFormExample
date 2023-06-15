import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormData } from '../form-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
name:string="";
age:number=0;


fun(val:any){
  console.log(val);
  console.log(this.name);
}
data=new FormData('Ragul',22,'IT','male','developing','java','python','js')
}

