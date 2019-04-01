import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterHouseholdComponent } from './register-household/register-household.component'
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-household', component: RegisterHouseholdComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
