import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription = () => {
    return `${this.name} - ${this.age}`;
  }

  changeHero = (): void => {
    this.name = 'Spider-Man';
  }

  changeAge = (): void => {
    this.age = 25;
  }

  resetValues = (): void => {
    this.age = 45;
    this.name = 'Ironman';
  }

}
