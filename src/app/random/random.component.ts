import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RandomService} from "../random.service";

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  @Input() max = 10;
    randomNumber!: number;
  showDes: boolean = false
  constructor(private randomService: RandomService) {
  }


  random(){
    this.showDes = true;
    this.randomNumber = this.randomService.randomNumber(this.max);
  }
  ifSmaller(int:number) {
    return (int <= this.max / 2);
  }
}
