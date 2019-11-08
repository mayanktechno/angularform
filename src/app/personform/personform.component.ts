import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.css']
})
export class PersonformComponent implements OnInit {

   personform : FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
   this.personform = this.fb.group({
      name : [''],
      username : [''],
      email:[''],
      address : this.fb.group({
        street : [''],
        suite : [''],
        city :[''],
        zipcode : [''],
        geo :this.fb.group({
          lat:[''],
          lng :['']
        })
      }),
      specialisation : this.fb.array([this.special()]),
      phone : [''],
      website : [''],
      company :  this.fb.group({
        name :[''],
        catchphrase : [''],
        bs:['']
        })
     }) 
  }
  
  special(){
   return this.fb.group({
      profile:[''],
      technology:['']
    })
  }

  get specialControl(){
    return this.personform.get('specialisation') as FormArray
  }
  addspecialisation(){
    this.specialControl.push(this.special());
  }
  delSpecial(i){
    this.specialControl.removeAt(i);
  }
  onsubmit(){
    console.log(this.personform.value);
    this.personform.reset();
  }

}
