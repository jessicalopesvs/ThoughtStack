import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";
import {ThoughtsService} from "../thoughts.service";


@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent implements OnInit{

  thought : Thought ={

    content:"Learning angular",
    author:'Jessica Lopes',
    model:'modelo1'
  }


  constructor(private service: ThoughtsService,
              private router : Router) {

  }

  ngOnInit(): void {
  }

  createTought() {
    this.service.create(this.thought).subscribe(() =>
    this.router.navigate(['/list-toughts']))
  }

  cancelCreateThought() {
    this.router.navigate(['/list-toughts'])
  }
}
