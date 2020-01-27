import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AccountModel } from './account.model';
import { Constant } from 'src/app/utils/constant';
import { HttpClient } from '@angular/common/http';


class ImageSnippet {

  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class AccountComponent implements OnInit {

  email: string;
  account_name: string;
  pwd = new AccountModel();
  msg: any;
  selectedFile: ImageSnippet;
  img_url: string;

  constructor(config: NgbModalConfig,
     private modalService: NgbModal,
     private authService: AuthService,
     private http: HttpClient) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

   open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit() {
    this.userProfile();
    console.log(this.authService.user);
  }

  userProfile(){
    this.account_name = this.authService.user.full_name;
    this.email = this.authService.user.email;
    this.img_url = this.authService.user.image_url;
  }

  changePwd(){
    this.msg = "Please wait...";
    this.authService.changePassword(this.pwd).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });
  }



  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      const uploadData = new FormData();
      uploadData.append('file', file, file.name);

      this.authService.uploadImage(uploadData).subscribe(
        (res) => {
          
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });


    reader.readAsDataURL(file);
  }


  }
