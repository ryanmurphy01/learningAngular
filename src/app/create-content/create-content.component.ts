
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
  message: any;

  
 addBook(id: any, author: string, imgUrl: string, type: string, title: string, body: string, tags: [string] ): void{
   let addContentPromise = new Promise((success, fail) =>{
      if(id&& author && title && body){
        this.newBookEvent.emit({
          id,
          author,
          imgUrl,
          type,
          title,
          body,
          tags
        })
        success("Content added!")
      } else{
        fail("Can't add the content without all the required fields set")
      }

   });

   addContentPromise.then((msg) =>{
     console.log(msg)
     this.message = "";
   }).catch((msg) =>{
     console.log(msg)
     this.message = msg;
   }
     
   );

      
    
    
  }

    

  

  }

  



