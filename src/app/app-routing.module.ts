import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { DetailContainerComponent } from './components/detail-container/detail-container.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewChecklistItemComponent } from './components/new-checklist-item/new-checklist-item.component';
import { EditChecklistItemComponent } from './components/edit-checklist-item/edit-checklist-item.component';


const routes: Routes = [
    { path: '', component: ListContainerComponent }, // Home route
    { path: 'customer/:id', component: DetailContainerComponent},
    { path: 'new/client', component: NewClientComponent},
    { path: 'new/checklist-item/:id', component: NewChecklistItemComponent},
    { path: 'edit/checklist-item/:id', component: EditChecklistItemComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
