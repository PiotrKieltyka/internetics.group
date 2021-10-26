import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailInterface } from '../models/email.interface';
import { API_EMAIL_TOKEN } from '../tools/api-email-token';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(
    private http: HttpClient,
    @Inject(API_EMAIL_TOKEN) private API_EMAIL_TOKEN: string,
  ) {
  }

  sendEmail(email: EmailInterface) {
    this.http.post(
      this.API_EMAIL_TOKEN,
      JSON.stringify(email),
      this.addHeaders(),
    ).subscribe(
      (data) => data,
      (error) => console.error(error),
    );
  }

  addHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return {
      headers,
    };
  }
}
