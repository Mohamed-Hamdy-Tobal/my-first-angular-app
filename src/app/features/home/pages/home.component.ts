import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from '../components/section-one/section-one.component';
import { SectionTwoComponent } from '../components/section-two/section-two.component';
import { Hero } from '../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SectionOneComponent, SectionTwoComponent, Hero],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
