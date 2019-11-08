import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forming',
  templateUrl: './forming.component.html',
  styleUrls: ['./forming.component.css']
})
export class FormingComponent implements OnInit {
  userForm  :FormGroup
  counter: number;
  // username  = new FormControl('');
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.userForm =  this.fb.group({
      firstname :  new FormControl('' ,[Validators.required,Validators.minLength(6),Validators.pattern("[A-Za-z]")]),
      lastname :  new FormControl(''),
      email :  new FormControl (''),
      password : new FormControl (''),
    address :  this.fb.group({
        city :  new FormControl(''),
        state :  new FormControl(''),
        country : new FormControl('')
      }),
      mobiles : this.fb.array([
        this.mob2()
      ])
    })
  }
  mob2(){
    return new FormControl('')
  }

get mob2control(){
   return this.userForm.get('mobiles') as FormArray
  }

  addMobile(){
    this.mob2control.push(this.mob2());
  }

  get firstname(){
    return this.userForm.get('firstname') ;
  }
  onsubmit(){
    console.log(this.userForm.controls.firstname.value,"1");
    console.log(this.userForm.controls['firstname'].value,"2");
    console.log(this.userForm.get('firstname').value,"3");
    // console.log(this.userForm.controls.address.controls.city.value,"4");
    // console.log(this.userForm.controls['address'].controls['city'].value,"5");
    console.log(this.userForm.get('address').get('city').value,"6");
    console.log(this.userForm.controls);
    console.log(this.userForm ,"fdsfdff");
    // console.log(this.userForm.controls.mobiles.controls,"hiii mobile");
    console.log(this.userForm.value);

    this.counter = 0;
    for(let mob of this.mob2control.controls){
      console.log(this.userForm.get(['mobiles', this.counter++]).value);
    }
    this.userForm.reset();
    if(this.mob2control.length !==1){
      this.mob2control.removeAt(0);
    }
  }

  deletemobile(i){
    this.mob2control.removeAt(i)
  }

  updatePartiallyform(){
    this.userForm.patchValue({
      firstname:"appinventiv",
      address:{
        city : "noida"
      }
    })
  }



  // updateUsername(){
  //   this.username.setValue("babu@gmail.com");
  // }
}
