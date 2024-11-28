import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { DetailContainerComponent } from './components/detail-container/detail-container.component';


const routes: Routes = [
    { path: '', component: ListContainerComponent }, // Home route
    { path: 'customer/:id', component: DetailContainerComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
