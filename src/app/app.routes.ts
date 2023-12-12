import {Routes} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";



const routeConfig: Routes = [
    {path: 'tasks', component: TasksComponent},
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
];


export default routeConfig;
