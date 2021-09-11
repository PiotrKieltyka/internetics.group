import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailInterface } from '../models/email.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {
  }

  sendEmail(email: EmailInterface) {
    this.http.post(
      `https://node.piotrkieltyka.website/mail`,
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
