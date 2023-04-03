import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent {

  @Input() task: Task = {} as Task;
  @Output() deleteTask: EventEmitter<string> = new EventEmitter();
  @Output() toggleCompleted: EventEmitter<any> = new EventEmitter();

  constructor() {}

  deleteClick() {
    if (this.task.id !== undefined) {
      this.deleteTask.emit(this.task.id.toString());
    }
  }
  toggleClicked() {
    if (this.task.id !== undefined) {
      this.toggleCompleted.emit({id: this.task.id, value: !this.task.completed});
    }
  }
}
