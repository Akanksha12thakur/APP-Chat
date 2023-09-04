import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './Mycompo/chat/chat.component';
import { HomeComponent } from './Mycompo/home/home.component';
import { NavbarComponent } from './Mycompo/navbar/navbar.component';
import { LoginComponent } from './Mycompo/login/login.component';
import { RegisterComponent } from './Mycompo/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
