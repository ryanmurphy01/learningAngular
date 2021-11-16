import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../app/helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentService } from './content.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  getContentObs(): Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
    

  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put("api/content", content, this.httpOptions);
  }
}
