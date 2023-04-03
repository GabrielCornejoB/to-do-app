import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  taskForm: FormGroup;

  constructor(private tasksService: TasksService, private fb: FormBuilder){
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().subscribe({
      next: (d) => {
        this.tasks = [];
        for (let t of d) {
          this.tasks.push({
            id: t.id,
            title: t.title,
            description: t.description
          });
        }
      },
      error: (e) => console.log(e)
    });
  }
  createTask() {
    const task: Task = {
      title: this.taskForm.get('title')?.value,
      description: this.taskForm.get('description')?.value
    };
    this.tasksService.createTask(task).subscribe({
      next: (d) =>{ 
        this.getTasks();
        this.taskForm.reset();
      },
      error: (e) => {
        console.log(e);
        this.taskForm.reset();
      }
    });
  }
  deleteTask(id: string) {
    this.tasksService.deleteTask(id).subscribe({
      next: (d) => this.getTasks(),
      error: (e) => console.log(e)
    });
  }
}
