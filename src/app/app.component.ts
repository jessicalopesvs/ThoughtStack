import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CreateNoteComponent} from "./components/notes/create-note/create-note.component";
import {ListToughtsComponent} from "./components/notes/list-toughts/list-toughts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CreateNoteComponent, ListToughtsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'myFirstAngularProject';
}


