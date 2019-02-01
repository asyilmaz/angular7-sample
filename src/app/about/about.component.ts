import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { take } from 'rxjs/operators';
import { SearchComponent} from './search/search.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  messageResult: boolean;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    
  }

  openModal() {
    this.modalService.message(
      'My biscuits are burning!'
    ).pipe(
      take(1) // take() manages unsubscription for us
    ).subscribe(result => {
        console.log({ messageResult: result });
        this.messageResult = result;
      });
  }

}
