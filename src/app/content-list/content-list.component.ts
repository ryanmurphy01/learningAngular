import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  message: string;
  contentArray: Content[] = [{

    id: 0, 
    author: 'Ryan Murphy',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'Article',
    title: 'Angular',
    body: 'This is an article about angular',
    tags: ["Angular", "Article"]

   }, {

    id: 1,
    author: 'Philip Rosen',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg/1920px-Beilstein_-_Burg_Hohenbeilstein_und_Unteres_Schloss_-_Ansicht_vom_Birkenweg_mit_Abendsonne.jpg',
    type: 'Article',
    title: 'Why is MAD cool',
    body: 'This article tells us why MAD is cool',
    tags: ["Student", "Male","Cool"]

   }, {

    id: 2,
    author: 'Man Guy',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'Book',
    title: 'guy the story',
    body: 'This is a book about a guy',
    tags: ["Guy", "Male"]
   }, {

   id: 3,
   author: 'Joe Blow',
   imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
   type: 'Book',
   title: 'Fire in the wind',
   body: 'This book is about fire',
   tags: ["Fire", "Wind"]
   
   }, {

   id: 4,
    author: 'Suzanne Collins',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'Book',
    title: 'Hunger Games',
    body: 'This the the first book in the series',
    tags: ["Gore", "Fiction"]

   
   }, {

    id: 5,
    author: 'Ryan',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'Article',
    title: 'MAD Courses',
    body: 'This is a good article',
    tags: ["Student", "Male"]

   }];
  constructor() { 
   this.message = ""

  }

  ngOnInit(): void {

  }

  checkIfTitleExists(title: string): void{

    let filter = this.contentArray.filter(item => item.title === title);
    if(filter.length > 0){
      this.message = "Item found";
    } else{
      this.message = "No item found with that title"
    }

    

  }

}
