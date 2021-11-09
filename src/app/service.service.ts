import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../app/helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return CONTENT;
  }

  getContentObs(): Observable<Content[]>{
    const content = of(CONTENT)
    this.messageService.add("Content retrieved!")
    return content;
  }
}
