import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from './helper-files/content-interface';
import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }
}
