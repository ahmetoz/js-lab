import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number = 10
  serverStatus: string = "online"
  allowNewServer: boolean = false
  serverCreationStatus: string = "No server was created yet!"
  serverName: string = 'test server'

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created. Name is " + this.serverName 
  }

}
