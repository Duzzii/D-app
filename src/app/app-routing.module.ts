import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DonateComponent } from './pages/donate/donate.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'donate', component: DonateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
