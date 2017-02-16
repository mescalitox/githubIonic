
import { User } from './../../models/user';
import { OnInit, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubUsers } from './../../providers/github-users';
import { UserDetailsPage } from './../user-details/user-details';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {

  searchTerms = String;
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) { }


  ngOnInit() {

    this.githubUsers.load().subscribe(users => {
      console.log(users)
      this.users = this.originalUsers = users;
    })
  }

  userTapped(event, login) {
    this.navCtrl.push(UserDetailsPage, {
      login: login
    });
  }

  //search users
  searchUsers(ev: any) {

    // set val to the value of the searchbar
    let val = ev.target.value.trim();

    // We will only perform the search if we have 3 or more characters
    if (val === '' || val.length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(val).subscribe(users => {
        console.warn(users)
        this.users = users;
      });
    }

  }



  ionViewDidLoad() {
    console.log('hello Users Page');
  }

}
