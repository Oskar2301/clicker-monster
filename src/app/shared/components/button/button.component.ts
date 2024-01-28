import { Component, EventEmitter, Input, Output } from '@angular/core';

type typeButton = 'submit' | 'button';
type variantButton = 'danger' | 'primary' | 'secondary' | 'outline';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: typeButton = 'button';
  @Input() label: string;
  @Input() variant: variantButton = 'primary';
  @Input() isFullWidth = false;
  @Output() byClick = new EventEmitter();

  public handleClick() {
    this.byClick.emit();
  }
}
