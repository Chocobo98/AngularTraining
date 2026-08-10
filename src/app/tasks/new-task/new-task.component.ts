import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();

  //Two Way Binding with Directives
  taskTitle = '';
  taskSummary = '';
  taskDate = '';

  //Two Way Binding with Signal
  // taskTitle = signal('');
  // taskSummary = signal('');
  // taskDate = signal('');

  // Any of those didn't change the syntax in the template

  OnCancelTask() {
    this.cancelTask.emit();
  }

  OnSubmit() {
    this.add.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      date: this.taskDate,
    });
  }
}
