import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../heroClass';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new HeroClass(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  constructor() { }

  ngOnInit(): void {
  }
  skyDog(): HeroClass {
    const myHero =  new HeroClass(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

}
