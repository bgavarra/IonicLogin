import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider:AuthProvider, private storage: Storage){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(name: string, password:string){
    this.authProvider.login(name, password)
    .subscribe(
      (res)=>{
        console.log(res);
        this.storage.set('token',res);
      },(error)=>{
        console.log(error);
      }
    );
  }
}
