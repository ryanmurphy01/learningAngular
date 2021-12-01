import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { ContentListComponent } from './content-list/content-list.component';
import { DefaultTypePipe } from './default-type.pipe';
import { ArticleTypePipe } from './article-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { CreateComponentComponent, CreateDialogComponent } from './create-component/create-component.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';







@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    DefaultTypePipe,
    ArticleTypePipe,
    HoverStyleDirective,
    CreateComponentComponent,
    CreateDialogComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000
      }), 
      FormsModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatDialogModule,
      RouterModule.forRoot([
        { path: 'content/:id', component: DetailsComponent },
        { path: '', component: ContentListComponent},
        { path: "**", component: NotFoundComponent}, 
      ]),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
