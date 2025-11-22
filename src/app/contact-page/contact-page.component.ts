import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  formulaireContact = {
    prenom: '',
    nom: '',
    email: '',
    message: ''
  };
  onSubmit() {
    console.log('Formulaire soumis :', this.formulaireContact);
  }
}
