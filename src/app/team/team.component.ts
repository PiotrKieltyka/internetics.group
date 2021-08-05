import {Component} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  team: Array<{
    name: string;
    socialtag: string;
    occupation: string;
    codingFrom: string;
    bio: string;
  }> = [
    {
      name: 'Piotr Kiełtyka',
      socialtag: '@fangstick',
      occupation: 'Fullstack Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'Information Technology Engineer with many years of experience in maintenance and deployment of hardware and software as well as software development. Dedicated developer with a passion for coding and problem solving.'
    },
    {
      name: 'Piotr Kiełtyka',
      socialtag: '@fangstick',
      occupation: 'Fullstack Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'Information Technology Engineer with many years of experience in maintenance and deployment of hardware and software as well as software development. Dedicated developer with a passion for coding and problem solving.'
    }
  ]

}
