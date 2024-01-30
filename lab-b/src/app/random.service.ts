import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    //(max-min+1)+min
    return Math.floor(Math.random()*(max-1+1))+1
  }
}
