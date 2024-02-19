import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place, Products, UserInfo } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http: HttpClient) { }

  public getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(`../../assets/myData/places.json`);
  }

  public getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`../../assets/myData/products.json`);
  }

  public getUserInfo(): Observable<UserInfo>{
    return this.http.get<UserInfo>(`../../assets/myData/userInfo.js`);
  }
}
