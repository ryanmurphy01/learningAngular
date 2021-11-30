import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number = 0;
  content: any = {};

  constructor(private route: ActivatedRoute, private contentService: ServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.id = Number(params.get('id')); 
      this.contentService.getContentItem(this.id).subscribe (
        c => {
          this.content = c;
          console.log(this.content);
        });

        
  
  });
  }

}
