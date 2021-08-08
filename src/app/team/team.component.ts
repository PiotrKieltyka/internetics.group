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
      bio: 'Information Technology Engineer with many years of experience in maintenance and deployment of hardware and software as well as software development. Dedicated developer with a passion for coding and problem solving.',
      imageUrl: './assets/team/pk.jpeg'
    },
    {
      name: 'Piotr Szczechowski',
      socialtag: '@pszczechowskiit',
      occupation: 'Frontend Developer',
      codingFrom: 'Coding from Planet Earth',
      bio: 'I am a person who still likes to improve. Thanks to the completed studies I have understood the basics of programming and I am still developing in this direction, creating projects that give me the opportunity to improve my programming competences.',
      // Jestem osobą, która wciąż lubi się doskonalić. Dzięki ukończonym studiom zrozumiałem podstawy programowania i wciąż rozwijam się w tym kierunku, tworząc projekty, które dają mi możliwość doskonalenia swoich kompetencji programistycznych.
      imageUrl: './assets/team/psz.png'
    }
  ]

}
