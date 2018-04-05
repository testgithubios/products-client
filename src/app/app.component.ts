import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'app';

  constructor(private translateService: TranslateService) {

   translateService.addLangs(['en', 'vi']);
   translateService.setDefaultLang('vi');
   
   let defaultLang = translateService.getBrowserLang();
   
   translateService.use(defaultLang.match(/en|vi/) ? defaultLang : 'vi');

 }

  search(searchValue){
    alert('sss');
    console.log('search '+searchValue);
  }
}
