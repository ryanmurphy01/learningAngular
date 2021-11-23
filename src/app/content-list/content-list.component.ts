import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ServiceService } from '../service.service';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content [] = [];

  constructor(private ServiceService: ServiceService){

  }

  ngOnInit(): void {
    this.getContent()
  }

  getContent(): void {
    this.ServiceService.getContent().subscribe(contentList => {
      this.content = contentList;
    })
  }

  checkIfTitleExists(title: string): void{

   // let filter = this.contentArray.filter(item => item.title === title);
    //if(filter.length > 0){
     // this.message = "Item found";
    //} else{
     // this.message = "No item found with that title"
    //}

    

  }

  addContentToList(newContent: any): void {
    this.content.push(newContent);
    this.content = [...this.content];
  }

  updateContentToList(newContent: any): void {
    let bookIndex = this.content.map(e => e.id).indexOf(newContent.id)
    this.content[bookIndex] = newContent;
    this.content = [...this.content];
  }

  

}
