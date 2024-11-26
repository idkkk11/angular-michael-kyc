import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListContainerComponent,
    ListItemComponent,
    ListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
