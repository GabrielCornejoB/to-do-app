import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent {
  title: string = "Titulo de la tarea";
  description: string = "Descripcion de la tarea";
  completed: boolean = false;
}
