import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { DeviceListComponent } from './components/device-list/device-list.component';

const routes: Routes = [
  { path: 'signIn', component: AuthComponent },
  { path: 'devicesList', component: DeviceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
