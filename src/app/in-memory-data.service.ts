import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 1, name: 'Asta' },
    { id: 2, name: 'Yato' },
    { id: 3, name: 'Izuku Midoriya' },
    { id: 4, name: 'Erin Yeager' },
    { id: 5, name: 'Tanjiro Kamado' },
    { id: 6, name: 'Zenitsu Agatsuma' },
    { id: 7, name: 'Shinra Kusakabe' },
    { id: 8, name: 'Benimaru Shinmon' },
    { id: 9, name: 'Osamu Dazai' },
    { id: 10, name: 'Katsuki Bakago' },
    { id: 11, name: 'Satoru Gojo'},
  ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}