import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

login(){
  return [
    {
      username: 'vinu',
      pssword: '123'
    },
    {
      username: 'test',
      pssword: 'test'
    }
  ]
}

}