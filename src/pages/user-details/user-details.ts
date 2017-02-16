import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from './../../models/user';
import { GithubUsers } from './../../providers/github-users';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage implements OnInit {

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) { }

  ngOnInit() {
    let login = this.navParams.get('login');
    this.githubUsers.loadDetails(login).subscribe(user => {
      console.warn(user);
      this.user = user
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
