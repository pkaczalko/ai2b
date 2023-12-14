import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {JwtModule} from "@auth0/angular-jwt";
import {StartComponent} from "./start/start.component";
import {ItemsComponent} from "./items/items.component";
import {UsersComponent} from "./users/users.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  AppComponent,
    StartComponent,
      ItemsComponent,
      UsersComponent

      ],
  imports: [
    BrowserModule,
      AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('access_token');
          },

          allowedDomains: ['labjwt.zecer.wi.zut.edu.pl']
        }
      }),
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
