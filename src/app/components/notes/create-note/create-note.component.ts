import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms"
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterLink} from "@angular/router";
import {Thought} from "../thought";
import {ThoughtsService} from "../thoughts.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent implements OnInit {


  form!: FormGroup;


  constructor(private service: ThoughtsService,
              private router: Router,
              private builder: FormBuilder) {

  }

  ngOnInit(): void {

    this.form = this.builder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)])],
      model: ['model1']
    })
  }

  createTought() {
    console.log(this.form.get('author')?.errors)
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() =>
        this.router.navigate(['/list-toughts']))
    }
  }

  cancelCreateThought() {
    this.router.navigate(['/list-toughts'])
  }
}
