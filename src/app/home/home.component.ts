import { Component, OnInit } from '@angular/core';
import { LaptopsService } from '../services/laptops/laptops.service';
import { Laptop } from '../shared/models/laptop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  laptops:Laptop[] = [];
  constructor(private laptopsService: LaptopsService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.laptops = this.laptopsService.getAllLaptopsBySearchTerm(params.searchTerm);
      else 
      this.laptops=laptopsService.getAll();
    })
    
  }

  ngOnInit(): void {
    
  }
}
