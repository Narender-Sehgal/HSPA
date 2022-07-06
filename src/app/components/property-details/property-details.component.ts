import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})

export class PropertyDetailsComponent implements OnInit {
  property: Property = {
    PropertyType: '',
    Description: '',
    City: '',
    Facing: '',
    FurnishedStatus: '',
    Price: ''
  };
  message = '';
  propertyDetail: any = [];
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    //this.getProperty(this.route.snapshot.params.id);
  }
  getProperty(id: string): void {
    this.propertyService.get(id)
      .subscribe(
        data => {
          this.property = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
