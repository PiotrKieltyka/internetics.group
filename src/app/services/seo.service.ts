import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  updateTitle(title: Observable<string>) {
    title.subscribe(value => {
      this.title.setTitle(value);
    });
  }

  updateMetaTag(metaTag: Observable<MetaDefinition>) {
    metaTag.subscribe(value => {
      this.meta.updateTag(value);
    });
  }
}
