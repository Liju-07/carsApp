import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.f()
  }

  f=()=>{
    this.api.user().subscribe(
      (data)=>{
        this.carData=data
      }
    )
  }

  carData:any={}
  ngOnInit(): void {
  }

}
