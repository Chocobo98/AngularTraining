import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();

  //Two Way Binding with Directives
  taskTitle = '';
  taskSummary = '';
  taskDate = '';
  private tasksService = inject(TasksService);

  //Two Way Binding with Signal
  // taskTitle = signal('');
  // taskSummary = signal('');
  // taskDate = signal('');

  // Any of those didn't change the syntax in the template

  OnCloseTask() {
    this.close.emit();
  }

  OnSubmit() {
    this.tasksService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        date: this.taskDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
