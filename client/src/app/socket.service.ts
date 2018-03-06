import { Injectable } from '@angular/core';

import io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket: any;
  constructor() {
    console.log('TAO SOCKET');
    this.socket = io('http://localhost:3000');
  }
  
  sendMessage(message) {
    this.socket.emit('CLIENT_SEND_MESSAGE', message);
  }

  addListener(eventName: string, fn: Function) {
    this.socket.on(eventName, data => fn(data));
  }
}
