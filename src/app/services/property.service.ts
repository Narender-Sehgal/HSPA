import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

const baseUrl = 'http://localhost:5000/api/property/';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) { }
  findAllUrl = 'http://localhost:5000/api/property/findall';
  createUrl = 'http://localhost:5000/api/property/create';
  detailUrl = 'http://localhost:5000/api/property/find/{id}';
  findAll(): Observable<any>{
    return this.http.get(this.findAllUrl);
  }
  get(id: any): Observable<Property> {
    return this.http.get(`${this.detailUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.createUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByPropertyType(PropertyType: any): Observable<Property[]> {
    return this.http.get<Property[]>(`${baseUrl}?title=${PropertyType}`);
  }
}