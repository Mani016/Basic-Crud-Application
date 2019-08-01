import { Component,OnInit  } from '@angular/core';
import { AppService } from './app.service';
import { Car } from './car';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  title = 'crudapp';
 

    cars: Car[] = [];
  car: Car;
  carToAdd: any;
  carFormGroup: FormGroup;
  carToUpdate: Car;
 
    constructor(private fb: FormBuilder,private appservice: AppService) {
      
    }
    ngOnInit() {
      this.getCars();
      this.createform();
      
    }

    createform(){
      this.carFormGroup = this.fb.group(
        {
          
          model: [''],
          price: [''],
          color: ['']
        }
      );
    }
  
    getCars() {
      this.appservice.getCars().subscribe(data => {
        this.cars = data;
      });
    }
    
  idtofetch = 1;
  getCar() {
    this.appservice.getCar(this.idtofetch).subscribe(data => {
      this.car = data;
    });
  }
  addCar() {
    this.appservice.addCar(this.carFormGroup.value).subscribe(data => {
      this.car = data;
      console.log(this.car);
    });
    this.getCars();
  }
  idtodelete=1;
  deleteCar() {
    this.appservice.deleteCar(this.idtodelete).subscribe(data => {
       this.getCars();
    });
  }
 idtoupdate=1;
  updateCar() {
    this.appservice.getCar(this.idtoupdate).subscribe(data => {
      this.carToUpdate = data;
      this.carToUpdate.model="updated model";
      this.appservice.updateCar(this.carToUpdate).subscribe(data1 => {
      this.getCars();
      });
    });

 
  
  
  }
}

