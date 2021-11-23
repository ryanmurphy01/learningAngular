import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();

  newContent: Content;
  tempId!: string;
  tempTags!: string;
  

  content: Content[] = [];
  contentItem: Content = {
    id: 14,
    author: "Default",
    type: "Default",
    title: "Default",
    body: "Default",
    tags: ["default"]
  } 

  constructor(private contentService: ServiceService, private messageService: MessageService) {
    this.newContent = {
      author: "",
      type: "",
      title: "",
      body: ""
      
    }
   }

  ngOnInit(): void {}

    addContent(): void{
    this.newContent.tags = this.tempTags.split(",");
    this.contentService.addContent(this.newContent).subscribe(content =>{
      this.messageService.add("Added content has an id of: " + this.newContent.id);
      this.addContentEvent.emit(this.newContent);
      this.newContent = {
        author: "",
        type: "",
        title: "",
        body: ""
      };

      this.tempTags = "";
      
    });
  }


  updateContent(): void{
    this.newContent.tags = this.tempTags.split(",");
    this.newContent.id = parseInt(this.tempId);
    this.contentService.addContent(this.newContent).subscribe(() => {
      this.messageService.add("Updated content at id: " + this.newContent.id);
      this.tempTags = "";
      this.tempId = "";
      this.updateContentEvent.emit(this.newContent)
      this.newContent = {
        author: "",
        type: "",
        title: "",
        body: ""
      }
    });

  }

  
  

  

}
