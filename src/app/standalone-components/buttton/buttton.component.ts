import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


type IButton =  'primary' | 'secondary' | 'danger' | 'warning' | 'light' | 'dark' |     'outline-primary' | 'outline-secondary' | 'outline-danger' | 'outline-warning' | 'outline-light' | 'outline-dark'
@Component({
  selector: 'mg-buttton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttton.component.html',
  styleUrls: ['./buttton.component.scss']
})
export class ButttonComponent {
    @Input({required: true}) type: IButton;
    @Input() class=  '';
    @Input() iconClass= '';
    @Input() loading =  false;
}
