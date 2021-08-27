import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {PricingPlans} from "../models/pricing-plans.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  pricingPlans = PricingPlans;
  plan: string = this.route.snapshot.paramMap.get('id') as string;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  contactForm = new FormGroup({
    subscription: new FormControl(this.pricingPlans[Number(this.plan)].planId),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitContactForm() {
    console.log(this.contactForm);
  }

  get subscr() {
    return this.contactForm.get('subscription') as FormControl;
  }

  get name() {
    return this.contactForm.get('name') as FormControl;
  }

  get email() {
    return this.contactForm.get('email') as FormControl;
  }

  get message() {
    return this.contactForm.get('message') as FormControl;
  }
}
