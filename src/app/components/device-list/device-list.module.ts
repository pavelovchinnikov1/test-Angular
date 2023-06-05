import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from '../../app-routing.module';
import { DeviceListComponent } from './device-list.component';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [CommonModule, AppRoutingModule, MatButtonModule, MatTableModule],
})
export class DeviceListModule {}
