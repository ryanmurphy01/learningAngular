import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  save(id: any, author: string, imgUrl: string, type: string, title: string, body: string, tags: [string]): void {
    
    const contentItem: Content = {
      id: id,
      author: author,
      imgUrl: imgUrl,
      type: type,
      title: title,
      body: body,
      tags: tags
    }

    this.contentService.addContent(contentItem).subscribe(content => this.content.push(content))
  }

  

}
