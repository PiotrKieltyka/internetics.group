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
    imageUrl: string;
  }> = [
    {
      name: 'Piotr Kiełtyka',
      socialtag: '@fangstick',
      occupation: 'Fullstack Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PKBio',
      imageUrl: './assets/team/pk.jpeg'
    },
    {
      name: 'Piotr Szczechowski',
      socialtag: '@pszczechowskiit',
      occupation: 'Frontend Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PSzBio',
      imageUrl: './assets/team/psz.png'
    }
  ]

}
