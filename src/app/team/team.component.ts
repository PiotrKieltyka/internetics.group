import {Component} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  team: Array<{
    name: string;
    socialTag: string;
    socialUrl: string;
    occupation: string;
    codingFrom: string;
    bio: string;
    imageUrl: string;
    socialNumbers: Array<number>;
  }> = [
    {
      name: 'Piotr Kiełtyka',
      socialTag: '@fangstick',
      socialUrl: 'https://github.com/PiotrKieltyka',
      occupation: 'Fullstack Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PKBio',
      imageUrl: './assets/team/pk.webp',
      socialNumbers: [64, 341, 43]
    },
    {
      name: 'Piotr Szczechowski',
      socialTag: '@pszczechowskiit',
      socialUrl: 'https://github.com/pszczechowski',
      occupation: 'Frontend Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PSzBio',
      imageUrl: './assets/team/psz.webp',
      socialNumbers: [23, 237, 34]
    }
  ]

}
