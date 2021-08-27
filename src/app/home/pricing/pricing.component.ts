import {Component} from '@angular/core';
import {PricingPlans} from "../../models/pricing-plans.model";
import {PricingPlansInterface} from "../../models/pricing-plans.interface";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {

  plans: Array<PricingPlansInterface> = PricingPlans;

}
