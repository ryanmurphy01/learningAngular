import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'learning-angular';

  constructor(public messageService: MessageService, private logServ: LogUpdateService){}
  
}


