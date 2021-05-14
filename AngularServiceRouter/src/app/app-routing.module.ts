import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

const routes: Routes = [
  {path: "home", component:StudentListComponent},
  {path: "create", component:StudentCreateComponent},
  {path: "detail/:id", component:StudentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
