import { Component,OnInit  } from '@angular/core';
import { AppService } from './app.service';
import { Car } from './car';
import { FormGroup, FormControl } from '@angular/forms';

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
 
    constructor(private appservice: AppService) {
    //   this.carFormGroup = new FormGroup(
    //     {
    //       model: new FormControl(this.carToAdd.model),
    //       price: new FormControl(this.carToAdd.price),
    //       color: new FormControl(this.carToAdd.color)
    //     }
    //   );
     
    }
    ngOnInit() {
      this.getCars();
      
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
  // addCar() {
  //   this.appservice.addCar(this.carFormGroup.value).subscribe(data => {
  //     this.car = data;
  //     console.log(this.car);
  //   });
  //   this.getCars();
  // }
  idtodelete=1;
  deleteCar() {
    this.appservice.deleteCar(this.idtodelete).subscribe(data => {
       this.getCars();
    });
  }
 

 
  
  
  }

