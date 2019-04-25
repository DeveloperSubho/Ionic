import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'P1',
      'Kolkata',
      'City Of Joy',
      './../assets/images/kolkata.jpg',
      150.00
    ),
    new Place(
      'P2',
      'Delhi',
      'City Of Polution',
      './../assets/images/delhi.jpg',
      250.00
    ),
    new Place(
      'P3',
      'Bangalore',
      'City Of Traffic',
      './../assets/images/bangalore.jpg',
      350.00
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
