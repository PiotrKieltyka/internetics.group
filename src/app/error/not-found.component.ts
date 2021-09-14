import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<section class="container">
    <div class="h-screen w-full flex flex-col justify-center items-center text-center">
      <h1 class="text-9xl font-extrabold">404</h1>
      <h2 class="text-3xl">UH OH! You're lost.</h2>
      <p class="my-12 w-2/3 sm:w-1/2 text-base text-gray-600">{{'Error404' | translate}}</p>
      <button class="animate-pulse" routerLink="/home">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="#0a152b"
                d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path>
        </svg>
      </button>
    </div>
  </section>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
}
