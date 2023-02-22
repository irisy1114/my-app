import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterListComponent } from './rosterlist/rosterlist.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RosterListComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
