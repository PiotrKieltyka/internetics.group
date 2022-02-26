import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer/footer.component';
import { PricingPlans } from '../models/pricing-plans.model';
import { ArrowToTopComponent } from '../tools/arrow-to-top/arrow-to-top.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ExampleComponent } from './examples/example.component';
import { ExamplesComponent } from './examples/examples.component';

import { HomeComponent } from './home.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { PricingComponent } from './pricing/pricing.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        JumboComponent,
        BenefitsComponent,
        ExampleComponent,
        ExamplesComponent,
        PricingComponent,
        ArrowToTopComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
