import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor(private fb : FormBuilder){}
signupForm :FormGroup;
name:string='';
email:string='';
password :string ='';

  ngOnInit(){
this.signupForm = this.fb.group({
  name : new FormControl(),
  email:new FormControl(),
  password: new FormControl(),
})
  }
  postData(signupForm){
    console.log(this.signupForm.controls);
    console.log(this.signupForm.controls['email'].value);
    console.log(signupForm.value);
  }
}