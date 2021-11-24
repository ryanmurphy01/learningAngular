import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { ContentListComponent } from './content-list/content-list.component';
import { DefaultTypePipe } from './default-type.pipe';
import { ArticleTypePipe } from './article-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { CreateComponentComponent } from './create-component/create-component.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule} from '@angular/material/dialog'




@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    DefaultTypePipe,
    ArticleTypePipe,
    HoverStyleDirective,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000
      }), 
      FormsModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatDialogModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
