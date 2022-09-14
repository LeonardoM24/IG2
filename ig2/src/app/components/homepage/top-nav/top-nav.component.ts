import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { PostAddComponent } from 'src/app/components/homepage/post-add/post-add.component';
import { imagenes } from 'src/app/components/homepage/feed/imagenes';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {

  imagenes = imagenes;
  addIcon = faSquarePlus;
  bsModalRef!: BsModalRef;
  titleAdd = "Add Post";
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalAdd() {
    const initialState = {
      list: [
        {"tag":'State',"value":1},
        {"tag":'Title',"value":this.titleAdd}
      ]
    };

    this.bsModalRef = this.modalService.show(PostAddComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close'; 

    this.bsModalRef.content.event.subscribe((res : any) => {
      this.imagenes.push({
        id: this.imagenes.length + 1 ,
        user: "user1453654",
        description: res.data.description,
        image: res.data.img,
      });
    });
  }

}
