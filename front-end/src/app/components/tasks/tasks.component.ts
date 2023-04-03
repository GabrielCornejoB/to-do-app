import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe({
      next: (d) => console.log(d),
      error: (e) => console.log(e)
    });
  }

}
