import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  public list: ContentList;
  constructor(list: ContentList) 
  {this.list = new ContentList(); }

  ngOnInit(): void {
   
   let item1: Content = {
     id: 0,
     author: 'Ryan',
     imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
     type: 'book',
     title: 'Ryans Web',
     body: 'This is ryans webpage',
     tags: ["Student", "Male", "St.Clair College"]
     
   }

   let item2: Content = {
    id: 1,
    author: 'Phillip',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'outdoor',
    title: 'philip Web',
    body: 'This is philip webpage'
  }


  let item3: Content = {
    id: 2,
    author: 'Darren',
    imgUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    type: 'Ios',
    title: 'Darren IOS',
    body: 'Darren likes IOS'
  }


   this.list.addContent(item1);
   this.list.addContent(item2);
   this.list.addContent(item3);

  }



}
