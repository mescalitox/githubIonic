import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OrganisationsPage } from './../pages/organisations/organisations';
import { UsersPage } from './../pages/users/users';
import { ReposPage } from './../pages/repos/repos';

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    OrganisationsPage,
    UsersPage,
    ReposPage
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganisationsPage,
    UsersPage,
    ReposPage,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
