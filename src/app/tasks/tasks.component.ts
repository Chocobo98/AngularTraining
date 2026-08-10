import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  // name = input<string>();
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string | undefined;
  isAddingTask = false;
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId);
  }

  onCompleteTask(id: string) {}

  OnStartAddTask() {
    this.isAddingTask = true;
  }

  OnCloseTask() {
    this.isAddingTask = false;
  }
}
