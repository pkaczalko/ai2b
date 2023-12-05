import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonLsService} from "../person-ls.service";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items!: any[];

  constructor(private service: PersonLsService) {
    this.items = this.service.getAll()

  }

  delete(i:number){
    if(confirm("Are you sure you want to delete this person?")){
    this.service.deletePerson(i);
    this.items = this.service.getAll()
    }
  }

}
