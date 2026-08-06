import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); //Now because it's a signal, you need to access it as a function in the template
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // To access signal values ...

  // Even it's this looks like a method, because the "get" keywoard you must consider it as a property in the template
  // get imagePath() { //State Management, if using Signal; this is useless...
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    const localRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[localRandomIndex]);
  }
}

//Notes from Udemy Course because probably I will forget later
// Signal: Kind of container that store a value and everytime this changes, Angular will look to all the signals related to that value used in differents plasces
// Compared to the other method (State management) like assigning the value to the property, this will made Angular to check all the components under the tree because
// use Zone.Js, thats check in a "zone" when a value or state has been chaged.
//
// In shorts words, State management -> Check and listen EVERY event; Signal -> Just the values you linked them, reevalute the UI and renderized again
