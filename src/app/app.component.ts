import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  singleUserId = signal<string>('u1');

  selectedUserName = computed(() =>
    this.users.find((element) => element.id === this.singleUserId()),
  )!;

  // get selectedUserName() {
  //   return this.users.find(user => user.id === this.selectedUserId)!;
  // }

  onSelectedUser(id: string) {
    this.singleUserId.set(id);
    // this.singleUserId = id;
  }
}
