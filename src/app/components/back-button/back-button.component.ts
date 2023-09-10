import {Component, Input} from '@angular/core';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
    @Input() link: string = ""
    protected readonly faArrowLeft = faArrowLeft;
}
