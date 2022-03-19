import { Component } from '@angular/core';
import { TeamMemberInterface } from '../models/team-member.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  team: Array<TeamMemberInterface> = [
    {
      name: 'Piotr Kiełtyka',
      socialTag: '@fangstick',
      socialUrl: 'https://github.com/PiotrKieltyka',
      occupation: 'Fullstack Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PKBio',
      status: true,
      imageUrl: './assets/team/pk.webp',
      socialNumbers: {
        posts: 64,
        followers: 341,
        following: 43,
      },
    },
    {
      name: 'Darek Betliński',
      socialTag: '@darekbet',
      socialUrl: 'https://fotografiabetlinscy.pl',
      occupation: 'Photographer & Designer',
      codingFrom: 'Photographs from Planet Earth',
      bio: 'DBBio',
      status: true,
      imageUrl: './assets/team/db.webp',
      socialNumbers: {
        posts: 19,
        followers: 140,
        following: 25,
      },
    },
    {
      name: 'Piotr Szczechowski',
      socialTag: '@pszczechowskiit',
      socialUrl: 'https://github.com/pszczechowski',
      occupation: 'Frontend Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'PSzBio',
      status: false,
      imageUrl: './assets/team/psz.webp',
      socialNumbers: {
        posts: 23,
        followers: 237,
        following: 34,
      },
    },
  ];
}
