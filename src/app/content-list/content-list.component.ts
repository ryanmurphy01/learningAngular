import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  
  contentArray: Content[] = [{

    id: 0, 
    author: 'Ryan1',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'book',
    title: 'Ryans Web',
    body: 'This is ryans webpage',
    tags: ["Student", "Male", "St.Clair College"]

   }, {

    id: 1,
    author: 'Ryan2',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'book',
    title: 'Ryans Web',
    body: 'This is ryans webpage',
    tags: ["Student", "Male", "St.Clair College","Test"]

   }, {

    id: 2,
    author: 'Ryan3',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'book',
    title: 'Ryans Web',
    body: 'This is ryans webpage',
    tags: ["Student", "Male", "St.Clair College"]
   }, {

   id: 3,
   author: 'Ryan4',
   imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
   type: 'book',
   title: 'Ryans Web',
   body: 'This is ryans webpage',
   tags: ["Student", "Male", "St.Clair College"]
   
   }, {

   id: 4,
    author: 'Ryan5',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'book',
    title: 'Ryans Web',
    body: 'This is ryans webpage',
    tags: ["Student", "Male", "St.Clair College"]

   
   }];
  constructor() { 
   

  }

  ngOnInit(): void {



  }

}
