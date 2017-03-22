import { Component } from '@angular/core';

import { HttpService } from '../../app/providers/http.service';

@Component({
  selector: 'page-newMessage',
  templateUrl: 'newMessage.html',
  providers: [HttpService]
})
export class newMessagePage {
  constructor(private httpService: HttpService) {}

  MessageSubmit(messageHeader: string, newMessage: string){
    this.httpService.sendDate({messageHeader: messageHeader, newMessage: newMessage})
      .subscribe(
        data => console.log
      );
  }
}
