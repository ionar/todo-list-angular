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
    id: crypto.randomUUID(),
    title: 'Lavar o rosto',
    category: "Higiene",
    done: false,
    deadline: "2023-11-15T09:00:00.000",
  },
  {
    id: crypto.randomUUID(),
    title: 'Lavar o pé',
    category: "Higiene",
    done: false,
    deadline: "2023-11-15T09:00:00.000",
  },
  {
    id: crypto.randomUUID(),
    title: 'Caminhar',
    category: "Exe",
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

  public getById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
  
  public delete(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public createTask(task: Task): void {
    this.tasks.push({ ...task, id: crypto.randomUUID() });
  }

}
