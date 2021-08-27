import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
  benefits: Array<{ title: string; description: string }> = [
    { title: 'BenefitsRWDTitle', description: 'BenefitsRWD' },
    { title: 'BenefitsDomainTitle', description: 'BenefitsDomain' },
    { title: 'BenefitsSSLTitle', description: 'BenefitsSSL' },
    { title: 'BenefitsEmailTitle', description: 'BenefitsEmail' },
    { title: 'BenefitsUpdatesTitle', description: 'BenefitsUpdates' },
    { title: 'BenefitsBackupTitle', description: 'BenefitsBackup' },
  ];
}
