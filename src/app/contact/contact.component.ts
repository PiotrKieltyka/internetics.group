import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PricingPlans } from '../models/pricing-plans.model';
import { EmailService } from '../services/email.service';
import { environment } from '../../environments/environment';

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
    private emailService: EmailService,
  ) {
  }

  contactForm = new FormGroup({
    subscription: new FormControl(this.pricingPlans[Number(this.plan)].planId),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl(''),
  });

  submitContactForm(): void {
    const plane = document.querySelector('#plane') as HTMLElement;
    plane.classList.add('fly');
    plane.addEventListener(
      'animationend',
      () => {
        plane.classList.remove('fly');
      },
      false,
    );
    this.emailService.sendEmail({
      secret: environment.backendConfig.secret,
      fromName: `${this.contactForm.get('name')?.value}`,
      replyTo: `${this.contactForm.get('email')?.value}`,
      message: `${this.contactForm.get('message')?.value}`,
      subscriptionPlan: `${this.contactForm.get('subscription')?.value}`,
    });
    this.contactForm.reset();
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
