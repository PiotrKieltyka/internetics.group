import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadImageService {

  constructor(
    private http: HttpClient,
  ) {}

  getImage(url: string): Observable<HttpResponse<ArrayBuffer>> {
    return this.http.get(url,{ observe: 'response', responseType: 'arraybuffer'});
  }

  encodeArrayBufferToBase64(arraybuffer: ArrayBuffer, byteOffset: number, length: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    if (length === null || length === undefined) {
      length = arraybuffer.byteLength; // Needed for Safari
    }
    const bytes = new Uint8Array(
      arraybuffer,
      byteOffset || 0, // Default needed for Safari
      length
    );
    const len = bytes.length;

    let base64 = '';
    for (let i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.slice(0, -1) + '=';
    } else if (len % 3 === 1) {
      base64 = base64.slice(0, -2) + '==';
    }

    return base64;
  };
}
