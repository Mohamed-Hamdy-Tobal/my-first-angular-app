import { Component } from '@angular/core';

@Component({
  selector: 'home-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  name: string = 'Mohamed Tobal';
  disabled: boolean = true;
  status: string = 'active';
}
