import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    this.initializeItems();
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage, {
      item:item
    });
  }

  initializeItems(){
    for(let i = 0; i < 10; i++){
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
  }
  getItems(ev:any){
    const val  = ev.target.value;
   // alert("VALUE: " + val);
    this.items = [];
    this.initializeItems();

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  

}
