import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecordsHomeComponent } from './records/records-home/records-home.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'records', component: RecordsHomeComponent },
  { path: 'play', component: PlayComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
