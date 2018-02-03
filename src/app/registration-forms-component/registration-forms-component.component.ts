import { Component } from '@angular/core';

// create an interface
interface User {
  firstName: string;
  lastName: string;
  email: string;
}
@Component({
  selector: 'app-registration-forms-component',
  templateUrl: './registration-forms-component.component.html',
  styleUrls: ['./registration-forms-component.component.css']
})
export class RegistrationFormsComponentComponent {

  // Tenemos un objeto de usuario inicializado dentro de la clase RegistrationFormComponent.
 //  Usemos este objeto de usuario para inicializar los controles de entrada en la plantilla.
 user: User = {
   firstName: 'Juan',
   lastName: 'Carranza',
    email: 'salmuzblues@gmail.com'
};

 /* Para enviar nuestro formulario, debemos usar un evento ngSubmit y adjuntarlo a un
  método en el componente. Agreguemos un método para mostrar el valor que se le pasó
  en la consola del navegador: */

 onSubmit(formValue) {
console.log(formValue);
 }
}
