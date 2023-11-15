import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './modules/task/components/list-task/list-task.component';

const routes: Routes = [
  {path: 'list-user', component: ListTaskComponent},
  {path: '', component: ListTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
