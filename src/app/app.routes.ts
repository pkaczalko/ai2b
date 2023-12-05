import {Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";
import {AddPersonComponent} from "./add-person/add-person.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routeConfig: Routes = [
    {
        path: '',
        component: ListComponent,
        title: 'list',
        pathMatch: 'full'
    },
  {
    path: 'list',
    component: ListComponent,
    title: 'list',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'details',
  },
    {
        path: 'add',
        component: AddPersonComponent,
        title: 'Add person',
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Not found',
    }

]

export default routeConfig;
