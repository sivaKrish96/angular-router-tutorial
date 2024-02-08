import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// Here you may have to declare the Routing paths and all
const routervalues: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    DetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routervalues)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
