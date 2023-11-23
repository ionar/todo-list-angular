import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 private tasks: Task[] = [
  {
    title: 'Lavar o rosto',
    category: "Higiene",
    done: false,
    deadline: "2023-11-15T09:00:00.000",
  },
  {
    title: 'Lavar o pé',
    category: "Higiene",
    done: false,
    deadline: "2023-11-15T09:00:00.000",
  }
];

  // private apiBaseUrl = 'http://localhost:5000/tasks';
  // private token = localStorage.getItem('TOKEN');

  constructor() { }
  // constructor(private http: HttpClient) { }
  // public getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiBaseUrl);
  // }

  public getTask(): Task[] {
    return this.tasks;
  }

}
