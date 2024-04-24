import { Routes } from '@angular/router';
import {CreateNoteComponent} from "./components/notes/create-note/create-note.component";
import {ListToughtsComponent} from "./components/notes/list-toughts/list-toughts.component";

export const routes: Routes = [{
  path: '',
  redirectTo:'list-toughts',
  pathMatch:'full'
},
  {
  path: 'create-toughts',
  component: CreateNoteComponent
},
  {
    path:'list-toughts',
    component:ListToughtsComponent
  }];
