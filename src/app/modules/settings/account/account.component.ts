import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AccountModel } from './account.model';
import { Constant } from 'src/app/utils/constant';
import { HttpClient } from '@angular/common/http';
import { PasswordModel } from 'src/app/model/password.model';
import { UpdateAdminModel } from './updateAdmin.model';


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
  update = new UpdateAdminModel;
  msg: any;
  selectedFile: ImageSnippet;
  img_url: string;
  phone_number: string;
  showSub = [];
  updateMsg: string;

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
  }

  userProfile(){
    this.update.full_name = this.authService.user.full_name;
    this.update.email = this.authService.user.email;
    this.update.phone_number = this.authService.user.phone_number;
    this.img_url = this.authService.image;
  }

  changePwd(){
    this.msg = "Please wait...";
    this.authService.changePassword(this.pwd).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.authService.logout();
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });
  }

  updateAdmin(){
    this.updateMsg = 'Saving Changes...'
    const dataUpdate = {
      'email' : this.update.email,
      'full_name' : this.update.full_name,
      'phone_number' : this.update.phone_number,
      'image_url' : this.authService.user.image_url
    }
    this.authService.updateAdminProfile(dataUpdate).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.updateMsg = res.message;
        this.userProfile();
      }
    }, (err) => {
      if(err.status !== 200){
        this.updateMsg = err.error.message;
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
        (res: any) => {
          console.log(res);
          this.msg = res.message;
          const dataUpdate = {
            'email' : this.authService.user.email,
            'full_name' : this.authService.user.full_name,
            'phone_number' : this.authService.user.phone_number,
            'image_url' : res.data.url
          }
          this.authService.updateAdminProfile(dataUpdate).subscribe((res: any) => {
            this.authService.image = JSON.stringify(res.data.image_url);
            this.userProfile();
          });

          this.onSuccess();
        },
        (err) => {
          console.log(err);
          this.msg = err.error.message;
          if(err.status === 401){
            this.authService.logout();
          }
          this.onError();
        })
    });


    reader.readAsDataURL(file);
  }

  onClosed(){
    this.updateMsg = '';
  }


  }
