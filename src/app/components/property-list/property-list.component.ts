import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:any = [];
  title = '';
  constructor(private propertyService: PropertyService) { }
  ngOnInit(): void {
    this.getAllPropertyList();
  }
  getAllPropertyList(){
    this.propertyService.findAll().subscribe((data:any)=>{
      this.properties = data;
      console.log(this.properties);
     })
  }
}