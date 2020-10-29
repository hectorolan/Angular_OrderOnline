import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: { [id: number] : any; } = {};

  constructor() { }
}
