import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycompo/navbar/navbar.component';
import { HomeComponent } from './Mycompo/home/home.component';

import { ChatComponent } from './Mycompo/chat/chat.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment.development';

import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './Mycompo/login/login.component';
import { RegisterComponent } from './Mycompo/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    ChatComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule, BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule
    
  ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
