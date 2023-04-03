import { Component, Input } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent {
  @Input() task: Task = {} as Task;
  completed: boolean = false;
}
