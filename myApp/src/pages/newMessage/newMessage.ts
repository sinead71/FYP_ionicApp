import { Component } from '@angular/core';

import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-newMessage',
  templateUrl: 'newMessage.html',
  providers: [HttpService]
})
export class newMessagePage {
  clearHeader: string = "";
  clearMessage: string = "";
  constructor(private httpService: HttpService) {}

  MessageSubmit(messageHeader: string, newMessage: string, newComment: string){
    this.httpService.sendData({messageHeader: messageHeader, newMessage: newMessage, newComment: newComment})
      .subscribe(
        data => console.log
      );
    this.clearHeader = null;
    this.clearMessage = null;
  }
  
}
