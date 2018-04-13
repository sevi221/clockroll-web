import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },






    // { path: 'phones', canActivate: [IsAuthenticatedGuard], component: PhoneListComponent},
    // {
    //     path: 'phones',
    //     canActivate: [IsAuthenticatedGuard],
    //     component: PhoneBaseComponent,
    //     children: [
    //         {
    //             path: 'new',
    //             canActivate: [IsAuthenticatedGuard],
    //             canDeactivate: [CanLeavePhoneCreateGuard],
    //             component: PhoneCreateComponent
    //         },
    //         {
    //             path: ':id',
    //             canActivate: [IsAuthenticatedGuard],
    //             resolve: {
    //                 phone: PhoneDetailsResolverGuard
    //             },
    //             component: PhoneItemComponent
    //         }
    //     ]
    // },

];
