import { Routes } from '@angular/router';
import {CreateNoteComponent} from "./components/notes/create-note/create-note.component";
import {ListToughtsComponent} from "./components/notes/list-toughts/list-toughts.component";
import {RemoveThoughtComponent} from "./components/notes/remove-thought/remove-thought.component";
import {EditThoughtComponent} from "./components/notes/edit-thought/edit-thought.component";

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
  },
  {
    path:'thoughts/remove-thought/:id',
    component:RemoveThoughtComponent
  },
  {
    path:'thoughts/edit-thought/:id',
    component:EditThoughtComponent
  }];
