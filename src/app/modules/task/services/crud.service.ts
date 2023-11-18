import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiBaseUrl = 'http://localhost:5000/tasks';
  private token = localStorage.getItem('TOKEN');

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiBaseUrl);
  }

}
