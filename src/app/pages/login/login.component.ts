import { Component } from '@angular/core';
import {faArrowLeft, faBackward, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FormControl} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private loginService: LoginService) {

  }

  protected readonly faArrowLeft = faArrowLeft;


  onLogin() {

  }
}
