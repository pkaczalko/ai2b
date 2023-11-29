import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./app.routes";
import {RandomService} from "./random.service";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [provideRouter(routeConfig),RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
