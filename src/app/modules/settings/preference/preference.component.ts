import { Component, OnInit } from '@angular/core';
import { PreferenceService } from 'src/app/service/preference/preference.service';
import { PreferenceModel } from './preference.model';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  whatsapp: any;
  preferences = new PreferenceModel();
  msg : string;

  constructor(private preference: PreferenceService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.preference.getWhatsAppPreferences().subscribe((res: any) => {
      this.whatsapp = res.data;
      this.preferences.whatsapp_number = res.data.value;
    });
  }

  save(){
    this.msg = 'updating...';
    const data = {
      "name" : this.whatsapp.name,
      "meta" : this.whatsapp.meta,
      "description" : this.whatsapp.description,
      "value" : this.preferences.whatsapp_number 
    };
    this.preference.updateWhatsApp(data).subscribe((res: any) => {
      this.msg = 'updated!';
    })
    // window.alert('this is a function on blur');
  }
}
