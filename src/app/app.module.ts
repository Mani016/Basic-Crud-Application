import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarInMemDataService } from './InMemoryWebApiModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
        ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(CarInMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
