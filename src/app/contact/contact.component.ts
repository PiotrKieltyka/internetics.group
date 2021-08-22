import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitContactForm(form: FormGroup) {
    console.log(form);
  }

  get name() {
    return this.contactForm.get('name') as FormControl
  }

  get email() {
    return this.contactForm.get('email') as FormControl
  }

  get message() {
    return this.contactForm.get('message') as FormControl
  }
}
