import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common'; //If you wanna use NgFor, need to import it from here too

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  // singleUserId = signal<string>('');
  singleUserId?: string;

  // selectedUserName = computed(() =>
  //   this.users.find((element) => element.id === this.singleUserId()),
  // );

  get selectedUserName() {
    return this.users.find((user) => user.id === this.singleUserId)!;
  }

  onSelectedUser(id: string) {
    // this.singleUserId.set(id);
    this.singleUserId = id;
  }
}
