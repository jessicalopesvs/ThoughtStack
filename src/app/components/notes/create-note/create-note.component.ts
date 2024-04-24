import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink} from "@angular/router";


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

  content ={
    id:'1,',
    thought:"Learning angular",
    author:'Jessica Lopes',
    modelo:'modelo1'
  }

  ngOnInit(): void {
  }

  createTought() {

  }

  cancelCreateThought() {

  }
}
