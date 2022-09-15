import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { PostAddComponent } from 'src/app/components/homepage/post-add/post-add.component';
import { imagenes } from 'src/app/components/homepage/feed/imagenes';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  constructor(private modalService: BsModalService, private apiService: AuthService) { }
  
  imagenes = imagenes;
  addIcon = faSquarePlus;
  bsModalRef!: BsModalRef;
  titleAdd = "Add Post";

  imgs = this.apiService.getAllImg().subscribe(
    (resp) => {
      this.imagenes = JSON.parse(resp) 
    }
  )

  
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
      
      var xd = this.apiService.upPost([localStorage.getItem('username')!, res.data.img, res.data.description]).subscribe();

      window.location.reload()  
    });
  }

}
