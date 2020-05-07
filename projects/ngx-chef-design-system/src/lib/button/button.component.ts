import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-chef-button',
  template: `
    <button
    [attr.style]="style"
    (click)="onClick($event)"
    >{{ buttonText }}</button>
  `,
  styleUrls: ['./button.component.css']
})

export class NgxChefButtonComponent {
  @Input() buttonText = 'Hello';
  @Input() style = 'primary';
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  onClick = (e) => {
    this.handleClick.emit(e);
  }

}
