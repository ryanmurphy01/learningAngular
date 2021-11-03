
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  @Output() newBookEvent = new EventEmitter<Content>();
  newBookItem!: Content;
  itemCreated: boolean = true;
  
 addBook(author: string, imgUrl: string, type: string, title: string, body: string, tags: [string] ): void{
  
      let itemCreate = true;
      this.newBookItem = {
        author: author,
        imgUrl: imgUrl,
        type: type,
        title: title,
        body: body,
        tags: tags
  
      }
      this.newBookEvent.emit(this.newBookItem)
    
    
  }

    

  

  }

  



