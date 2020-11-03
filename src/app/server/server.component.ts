import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  // serverId = 10;
  // serverStatus = 'offline';
  serverId: number = 10;
  serverStatus: string = 'offline';

  // Method
  getServerStatus() {
    return this.serverStatus;
  }
}