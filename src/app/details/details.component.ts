import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  id: number;
  person: any;

  constructor(private route: ActivatedRoute,private service: PersonLsService) {
    this.id = this.route.snapshot.params['id']
    this.person = this.service.getPerson(this.id);
  }
}
