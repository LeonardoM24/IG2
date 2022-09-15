import { Component, OnInit } from '@angular/core';
import { imagenes } from './imagenes';
import { faTrash,  faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { PostAddComponent } from 'src/app/components/homepage/post-add/post-add.component';
import { DeleteAddComponent } from 'src/app/components/homepage/delete-add/delete-add.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  constructor(private modalService: BsModalService, private apiService: AuthService) { }
  
  imagenes = imagenes;
  
  imgs = this.apiService.getAllImg().subscribe(
    (resp) => {
      this.imagenes = JSON.parse(resp) 
    }
  )
  
  
  
  trashIcon = faTrash;
  editIcon = faPenToSquare;
  bsModalRef!: BsModalRef;
  titleModify = "Modify Post";
  

  ngOnInit(): void {
  }

  openModalModify(id: number) {
    
    var idx = this.imagenes.findIndex(e => e.id == id);
    console.log(id == this.imagenes[0].id)
    console.log(idx)
    const initialState = {
      list: [
        {"tag":'State',"value":2},
        {"tag":'Title',"value":this.titleModify},
        {"tag":'Imagen',"value":this.imagenes[idx].image},
        {"tag":'Description',"value":this.imagenes[idx].description}
      ]
    };
   
    this.bsModalRef = this.modalService.show(PostAddComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close'; 

    this.bsModalRef.content.event.subscribe((res : any) => {
      //var idx = imagenes.indexOf(id: id); 
      
      //var idx = imagenes.findIndex(e => e.id == id);
      console.log(idx);

      // ========================================================================================
      if(this.imagenes[idx].user == localStorage.getItem('username')){
        this.imagenes[idx].image = res.data.img;
        this.imagenes[idx].description = res.data.description;
        var xd = this.apiService.updatePost([res.data.description, res.data.img, id]).subscribe()
      }
      else{
        window.alert("Esta no es tu cuenta BROUUUUUUUUU!!!!!!!!!!!!")
      }

    });
  }

  openModalDelete(id: number) {

    this.bsModalRef = this.modalService.show(DeleteAddComponent);
    this.bsModalRef.content.closeBtnName = 'Close'; 

    this.bsModalRef.content.event.subscribe((res : any) => {
      var idx = this.imagenes.findIndex(e => e.id == id);
      if(this.imagenes[idx].user == localStorage.getItem('username')){
        this.imagenes.splice(idx, 1);
        var xd = this.apiService.deletePost(id).subscribe()
      }
      else{
        window.alert("Esta no es tu cuenta BROUUUUUUUUU!!!!!!!!!!!!")
      }
 
    });
  }


}
