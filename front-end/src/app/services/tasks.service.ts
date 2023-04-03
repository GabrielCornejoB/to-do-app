import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private URL: string = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa("corne:guarito123")
      })
    }
    return this.http.get<any>(this.URL + 'tasks/', options);
  }
}
