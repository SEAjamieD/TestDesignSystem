import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-chef-button',
  template: `
    <button
    [attr.style]="style"
    [attr.disabled]="disabled ? true : null"
    (click)="onClick($event)"
    >
      <span *ngIf="loading" class="loading"></span>
      <span>{{ buttonText }}</span>
    </button>
  `,
  styleUrls: ['./button.component.css']
})

export class NgxChefButtonComponent {
  @Input() buttonText = 'Hello';
  @Input() style = 'primary';
  @Input() disabled = null;
  @Input() loading = null;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  onClick = (e) => {
    this.handleClick.emit(e);
  }

}
