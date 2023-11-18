import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Task } from '../../models/task';
import { first } from 'rxjs';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private tasksService: CrudService) {}

  ngOnInit() {
    this.getTasks();
  }

  public getTasks(): void {
    this.tasksService
    .getTasks()
    .pipe(first())
    .subscribe({
      next: (res: Task[]) => {
        this.tasks = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
