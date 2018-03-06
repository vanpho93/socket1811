import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  socket;
  messages: string[] = [];

  constructor(private socketService: SocketService) {
    this.socketService.addListener('SERVER_SEND_MESSAGE', data => {
      this.messages.push(data);
    });
  }

  show(txt: string) {
    this.socketService.sendMessage(txt);
  }
}
