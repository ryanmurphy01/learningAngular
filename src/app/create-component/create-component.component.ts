import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  content: Content[] = [];
  contentItem: Content = {
    id: 14,
    author: "Default",
    type: "Default",
    title: "Default",
    body: "Default",
    tags: ["default"]
  } 

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(
      content => {
        this.content = content;
      }
    )
  }

  save(id: any, author: string, imgUrl: string, type: string, title: string, body: string, tags: [string]): void {
    
    this.contentItem = {
      id: id,
      author: author,
      imgUrl: imgUrl,
      type: type,
      title: title,
      body: body,
      tags: tags
    }
    console.log(this.contentItem)

    this.contentService.addContent(this.contentItem).subscribe(content => this.content.push(content));
  }

  update(): void{
    this.content[this.contentItem.id || 0] = this.contentItem
    this.contentService.updateContent(this.contentItem).subscribe(() => {
      console.log("Content Updated:")
    });

  }

  
  

  

}
