import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { DetailContainerComponent } from './components/detail-container/detail-container.component';
import { DetailCustomerInfoComponent } from './components/detail-customer-info/detail-customer-info.component';
import { DetailCustomerChecklistComponent } from './components/detail-customer-checklist/detail-customer-checklist.component';
import { DetailCustomerChecklistRowComponent } from './components/detail-customer-checklist-row/detail-customer-checklist-row.component';
import { ChipComponent } from './components/chip/chip.component';
import { DetailCustomerChecklistHeaderComponent } from './components/detail-customer-checklist-header/detail-customer-checklist-header.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewChecklistItemComponent } from './components/new-checklist-item/new-checklist-item.component';
import { EditChecklistItemComponent } from './components/edit-checklist-item/edit-checklist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListContainerComponent,
    ListItemComponent,
    ListHeaderComponent,
    DetailContainerComponent,
    DetailCustomerInfoComponent,
    DetailCustomerChecklistComponent,
    DetailCustomerChecklistRowComponent,
    ChipComponent,
    DetailCustomerChecklistHeaderComponent,
    NewClientComponent,
    NewChecklistItemComponent,
    EditChecklistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
