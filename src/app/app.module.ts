import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./app.routes";


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule,

  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }