import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'profile', component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
