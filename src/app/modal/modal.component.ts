import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  template: `
<div>
  <div class="modal-header">
    <h4 class="modal-title">{{title}}</h4>
  </div>
  <div class="modal-body">
    <p>{{message}}</p>
  </div>
  <div class="modal-footer">
    <button type="button"
      class="btn btn-outline-dark"
      (click)="activeModal.close(true)">OK</button>
  </div>
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  title: string;
  message: string;
  activeModal: NgbActiveModal;
  constructor(private _activeModal: NgbActiveModal) {
    this.activeModal = _activeModal;
  }
}
