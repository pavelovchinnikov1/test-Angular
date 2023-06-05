import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private URL_DEVICES = 'https://core.nekta.cloud/api/device/metering_devices';

  constructor(private http: HttpClient) {}

  toGetDevices() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
    });

    const options = { headers: headers };

    return this.http.post<any>(
      `${this.URL_DEVICES}`,
      {
        page: 1,
        last_page: 0,
        sort_field: 'id',
        sort: 'desc',
        search_string: null,
        device_state: 'all',
        is_archived: false,
        paginate: true,
        append_fields: ['active_polling', 'attributes', 'tied_point'],
        per_page: 10,
      },
      options
    );
  }
}
