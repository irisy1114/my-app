import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterlistComponent } from './rosterlist/rosterlist.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RosterlistComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
