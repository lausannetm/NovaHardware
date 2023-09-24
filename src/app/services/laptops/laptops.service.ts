import { Injectable } from '@angular/core';
import { Laptop } from 'src/app/shared/models/laptop';
import { sample_laptops } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  constructor() {}
  
    getAll():Laptop[]{
      return sample_laptops;
    }
    
    getAllLaptopsBySearchTerm(searchTerm:string){
      return this.getAll().filter(laptop=>laptop.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
}
