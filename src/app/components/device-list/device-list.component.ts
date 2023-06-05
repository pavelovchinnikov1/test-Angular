import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDevice } from 'src/app/models/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  devicesData = new BehaviorSubject<IDevice[]>([]);
  showTable = false;

  displayedColumns: string[] = ['id', 'name', 'last_active'];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  getDevices(): void {
    this.deviceService.toGetDevices().subscribe({
      next: (device) =>
        this.devicesData.next(device.data.metering_devices.data),
      error: (err) => console.log(err),
      complete: () => {
        console.info('complete');
        this.showTable = true;
      },
    });

    console.log(this.devicesData.asObservable());
  }

  formatDateTime(timestamp: number) {
    if (!timestamp) return 'null';

    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;
    return formattedDateTime;
  }
}
