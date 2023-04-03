import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe({
      next: (d) => {
        for (let t of d) {
          this.tasks.push({
            title: t.title,
            description: t.description
          });
        }
      },
      error: (e) => console.log(e)
    });
    console.log(this.tasks);
  }

}
