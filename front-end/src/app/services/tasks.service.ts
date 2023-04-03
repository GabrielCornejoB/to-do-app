import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private URL: string = "http://localhost:8000/tasks/";
  private urlOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa("corne:guarito123")
    })
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get<any>(this.URL, this.urlOptions);
  }
  createTask(task: Task): Observable<any> {
    return this.http.post(this.URL, task, this.urlOptions);
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete(this.URL + id + '/', this.urlOptions);
  }
}
