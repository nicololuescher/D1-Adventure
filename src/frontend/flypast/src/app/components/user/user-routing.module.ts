import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ride-selection', component: RideSelectionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
