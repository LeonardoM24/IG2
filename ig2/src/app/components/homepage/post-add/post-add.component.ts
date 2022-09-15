import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  itemform: any;
  list: any[] = [];
  image = "";
  descrip = "";

  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) {
   
  }

  ngOnInit() {
    if (this.list[0].value == 2){
      this.itemform = this.formBuilder.group({
        img: this.list[2].value,
        description: this.list[3].value
      })

    }else{
      this.itemform = this.formBuilder.group({
        img: "",
        description: ""
      })

    }
  }

  saveToList(form : any) {
    if(form.value){
      this.event.emit({data: form.value, res: 200});
      this.bsModalRef.hide();
    }
    
  }

  closeModal(){
    this.bsModalRef.hide();
  }
}
