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
    author: 'Book1',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'article',
    title: 'Cool Book',
    body: 'This is a cool book',
    tags: ["Student", "Male"]

   }, {

    id: 1,
    author: 'Book2',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'book',
    title: 'cool book 2',
    body: 'This is also a cool book',
    tags: ["Student", "Male","Test"]

   }, {

    id: 2,
    author: 'Book3',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'book',
    title: 'Web',
    body: 'This is a book',
    tags: ["Student", "Male"]
   }, {

   id: 3,
   author: 'Book4',
   imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
   type: 'book',
   title:  'Web',
   body: 'This is webpage',
   tags: ["Student", "Male"]
   
   }, {

   id: 4,
    author: 'Book5',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'book',
    title: 'Web',
    body: 'This is a book',
    tags: ["Student", "Male"]

   
   }, {

    id: 5,
    author: 'Book6',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'Article',
    title: 'Web',
    body: 'This is a book',
    tags: ["Student", "Male"]

   }];
  constructor() { 
   

  }

  ngOnInit(): void {



  }

}
