import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[] = [];

  constructor(private ServiceService: ServiceService){

  }

  ngOnInit(): void {

    //this.content = this.ServiceService.getContent();
    this.ServiceService.getContentObs().subscribe(content =>
      this.content = content);

  }

  checkIfTitleExists(title: string): void{

   // let filter = this.contentArray.filter(item => item.title === title);
    //if(filter.length > 0){
     // this.message = "Item found";
    //} else{
     // this.message = "No item found with that title"
    //}

    

  }

}
