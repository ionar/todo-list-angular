import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Task } from '../../models/task';
import { first } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  public tasks: Task[] = [];
  public taskForm!: FormGroup;

  constructor(private tasksService: CrudService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTask();
    this.buildForm();
  }

  public deleteUser(id: string): void {
    this.tasksService.delete(id);
    this.ngOnInit();
  }

  private buildForm(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required])
    })
  }

  public onSave(): void {
    this.onCreate();
  }

  public onCreate(): void {
    this.tasksService
      .createTask(this.taskForm.getRawValue());

  }


  // public getTasks(): void {
  //   this.tasksService
  //   .getTasks()
  //   .pipe(first())
  //   .subscribe({
  //     next: (res: Task[]) => {
  //       this.tasks = res;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

}
