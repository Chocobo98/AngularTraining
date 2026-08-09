import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

//Inputs
// Import "Input": Component Inputs
// Import "input": Signals Inputs

// Outputs
// Output: Component Outputs
// output: Event Emitter simpler

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // <-- Typescript just ommit this "error" because will know this value will be set somewhere else
  @Input({ required: true }) name!: string; //Inputs are properties in our component, but attributes in our selector
  @Output() clickOnUser = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input<string>('Vacant');
  // clickOnUser = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectedUser() {
    this.clickOnUser.emit(this.id); //Important,with this you're sending back a value to the parent component (In this case, AppComponent). So from its class you can do whatever you want with that value
  }
}

// COMMENTED JUST FOR EDUCATIONAL PURPOSES
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]); //Now because it's a signal, you need to access it as a function in the template
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // To access signal values ...

//   // Even it's this looks like a method, because the "get" keywoard you must consider it as a property in the template
//   // get imagePath() { //State Management, if using Signal; this is useless...
//   //   return 'assets/users/' + this.selectedUser().avatar;
//   // }

//   onSelectUser() {
//     const localRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[localRandomIndex]);
//   }
// }

//Notes from Udemy Course because probably I will forget later
// Signal: Kind of container that store a value and everytime this changes, Angular will look to all the signals related to that value used in differents plasces
// Compared to the other method (State management) like assigning the value to the property, this will made Angular to check all the components under the tree because
// use Zone.Js, thats check in a "zone" when a value or state has been changed.
//
// Long short story, State management -> Check and listen EVERY possible event; Signal -> Just the check values you linked them, reevalute the UI and renderized again
// When you're using Inputs, Components Inputs will be declared as Properties and been called as Properties in HTML templates
// But with Signal Components, will be called as Functions
