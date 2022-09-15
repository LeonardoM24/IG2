import { Component, OnInit } from '@angular/core';
import { imagenes } from './imagenes';
import { faTrash,  faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { PostAddComponent } from 'src/app/components/homepage/post-add/post-add.component';
import { DeleteAddComponent } from 'src/app/components/homepage/delete-add/delete-add.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  imagenes = imagenes;
  trashIcon = faTrash;
  editIcon = faPenToSquare;
  bsModalRef!: BsModalRef;
  titleModify = "Modify Post";
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalModify(id: number) {
    var idx = imagenes.findIndex(e => e.id == id);
    const initialState = {
      list: [
        {"tag":'State',"value":2},
        {"tag":'Title',"value":this.titleModify},
        {"tag":'Imagen',"value":this.imagenes[idx].image},
        {"tag":'Description',"value":this.imagenes[idx].description}
      ]
    };
    console.log({initialState});
    this.bsModalRef = this.modalService.show(PostAddComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close'; 

    this.bsModalRef.content.event.subscribe((res : any) => {
      //var idx = imagenes.indexOf(id: id); 
      
      var idx = imagenes.findIndex(e => e.id == id);
      console.log(idx);
      this.imagenes[idx].image = res.data.img;
      this.imagenes[idx].description = res.data.description;

    });
  }

  openModalDelete(id: number) {

    this.bsModalRef = this.modalService.show(DeleteAddComponent);
    this.bsModalRef.content.closeBtnName = 'Close'; 

    this.bsModalRef.content.event.subscribe((res : any) => {
      var idx = imagenes.findIndex(e => e.id == id);
      imagenes.splice(idx, 1);
    });
  }


}
