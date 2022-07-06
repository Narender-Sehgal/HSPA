import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property: Property = {
    PropertyType: '',
    Description: '',
    City: '',
    Facing: '',
    FurnishedStatus: '',
    Price: ''
  };
  submitted = false;
  constructor(private propertyService: PropertyService) { }
  ngOnInit(): void {
  }
  saveProperty(): void {
    debugger
    const data = {
      PropertyType: this.property.PropertyType,
      Description: this.property.Description,
      City: this.property.City,
      Facing: this.property.Facing,
      FurnishedStatus: this.property.FurnishedStatus,
      Price: this.property.Price,
    };
    this.propertyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newProperty(): void {
    this.submitted = false;
    this.property = {
      PropertyType: '',
      Description: '',
      City: '',
      Facing: '',
      FurnishedStatus: '',
      Price: ''
    };
  }
}
