import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
    ModalComponent
} from './modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    constructor(private ngbModal: NgbModal) { }

    message(
        message: string, title = 'Message'
    ): Observable<boolean> {
        const modal = this.ngbModal.open(
            ModalComponent, { backdrop: 'static' });

        modal.componentInstance.message = message;
        modal.componentInstance.title = title;

        return from(modal.result).pipe(
            catchError(error => {
                console.warn(error);
                return of(undefined);
            })
        );
    }
}
