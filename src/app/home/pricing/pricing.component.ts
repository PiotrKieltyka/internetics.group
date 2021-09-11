import { Component } from '@angular/core';
import { PricingPlanInterface } from 'src/app/models/pricing-plan.interface';
import { PricingPlans } from 'src/app/models/pricing-plans.model';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {

  plans: Array<PricingPlanInterface> = PricingPlans;

}
