import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./app.routes";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    RouterModule,
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
