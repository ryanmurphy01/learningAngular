
import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { ServiceService } from '../service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

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

  constructor(private contentService: ServiceService, private messageService: MessageService, private dialog: MatDialog) {


    this.newContent = {
      author: "",
      type: "",
      title: "",
      body: ""
      
    }
   }

  ngOnInit(): void {}

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateDialogComponent, {
       width: '400px',
       data: this.newContent,
    })
    
    dialogRef.afterClosed().subscribe( newContentFromDialog => {

      if (isNaN(newContentFromDialog.id)){
        this.addContentEvent.emit(newContentFromDialog);
      } else {
        this.updateContentEvent.emit(newContentFromDialog);
      }

      this.newContent = {
        author: "",
        type: "",
        title: "",
        body: ""
      }
    })
  }



}

@Component({
  selector: 'create-dialog-component',
  templateUrl: 'create.dialog-component.html',
})

export class CreateDialogComponent{
  tempId!: string;
  tempTags!: string;

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content, private contentService: ServiceService, messageService: MessageService 
  ) { }

  addContent(): void{
    this.data.tags = this.tempTags.split(",");
    this.contentService.addContent(this.data).subscribe(content =>{
      //this.messageService.add("Added content has an id of: " + this.newContent.id);
      this.data = {
        author: "",
        type: "",
        title: "",
        body: ""
      };

      this.tempTags = "";
      
    });
  }


  updateContent(): void{
    this.data.tags = this.tempTags.split(",");
    this.data.id = parseInt(this.tempId);
    this.contentService.addContent(this.data).subscribe(() => {
      //this.messageService.add("Updated content at id: " + this.newContent.id);
      this.tempTags = "";
      this.tempId = "";
      // this.updateContentEvent.emit(this.newContent)
      // this.newContent = {
      //   author: "",
      //   type: "",
      //   title: "",
      //   body: ""
      // }
    });
    this.dialogRef.close();
  }
}
