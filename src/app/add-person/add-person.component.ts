import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent{
  newPerson:any|Person = {};

  constructor(private service: PersonLsService, private router:Router){
  }


  savePerson() {
    this.newPerson.id = this.service.getAll().length;
    this.newPerson.image = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
    this.service.addPerson(<Person>this.newPerson);
    this.router.navigate(['/list']);

  }

}
