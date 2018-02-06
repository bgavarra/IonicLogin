import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider:AuthProvider){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(name: string, password:string){
    this.authProvider.login(name, password)
    .subscribe(
      (res)=>{
        console.log(res);
      },(error)=>{
        console.log(error);
      }
    );
  }
}
