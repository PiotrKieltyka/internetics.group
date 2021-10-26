import { AfterViewInit, Component } from '@angular/core';
import { LoadImageService } from '../../services/load-image.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss'],
})
export class JumboComponent implements AfterViewInit {
  jumboItems: Array<{
    imageUrl: string;
    header: string;
    content: string;
  }> = [
    {
      imageUrl: './assets/video/HunanGSX/earth-zoom-screen.webp',
      header: 'FirstJumboHeader',
      content: 'FirstWelcomeMessage',
    },
    {
      imageUrl: './assets/video/HunanGSX/my-diamo-loop-screen.webp',
      header: 'SecondJumboHeader',
      content: 'SecondWelcomeMessage',
    },
  ];

  constructor(private loadImageService: LoadImageService) {
  }

  ngAfterViewInit() {
    const jumboImage0 = document.querySelector(
      '#jumbo-image-0',
    ) as HTMLImageElement;
    const jumboImage1 = document.querySelector(
      '#jumbo-image-1',
    ) as HTMLImageElement;

    if (this.checkFileName(jumboImage0.src) === 'earth-zoom-screen.webp') {
      this.loadImageService
        .getImage('./assets/video/HunanGSX/earth-zoom.webp')
        .subscribe((item: HttpResponse<ArrayBuffer>): void => {
          jumboImage0.src =
            'data:image/webp;base64,' +
            this.loadImageService.encodeArrayBufferToBase64(
              item.body!,
              0,
              item.body?.byteLength!,
            );
        });
    }
    if (this.checkFileName(jumboImage1.src) === 'my-diamo-loop-screen.webp') {
      this.loadImageService
        .getImage('./assets/video/HunanGSX/my-diamo-loop-2.webp')
        .subscribe((item: HttpResponse<ArrayBuffer>) => {
          jumboImage1.src =
            'data:image/webp;base64,' +
            this.loadImageService.encodeArrayBufferToBase64(
              item.body!,
              0,
              item.body?.byteLength!,
            );
        });
    }
  }

  checkFileName(url: string) {
    const arr = url.split('/');
    return arr[arr.length - 1];
  }
}
