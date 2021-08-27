import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PricingPlans} from "../../models/pricing-plans.model";

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {

  plan: string = this.route.snapshot.paramMap.get('id') as string;

  getPlanForm = new FormGroup({
    subscription: new FormControl(PricingPlans[Number(this.plan)].planName, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  submitGetPlanForm(form: FormGroup) {
    console.log(form);
  }

  get subscr() {
    return this.getPlanForm.get('subscription') as FormControl;
  }

  get name() {
    return this.getPlanForm.get('name') as FormControl;
  }

  get email() {
    return this.getPlanForm.get('email') as FormControl;
  }

  get message() {
    return this.getPlanForm.get('message') as FormControl;
  }
}
