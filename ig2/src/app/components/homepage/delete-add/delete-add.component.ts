import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-add',
  templateUrl: './delete-add.component.html',
  styleUrls: ['./delete-add.component.css']
})

export class DeleteAddComponent implements OnInit {
  list: any[] = [];

  public event: EventEmitter<any> = new EventEmitter();
  constructor(public bsModalRef: BsModalRef) {
   
  }

  ngOnInit() { }

  deletePost(){
    this.event.emit({ res: 200});
    this.bsModalRef.hide();
  }
  
  closeModal(){
    this.bsModalRef.hide();
  }
}
