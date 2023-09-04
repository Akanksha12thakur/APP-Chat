import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

interface CustomUser {
  // displayName: any;
  uid: string;
  email: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string): Promise<void> {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string): Promise<void> {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }

  async getCurrentUser(): Promise<CustomUser | null> {
    const user = await this.afAuth.currentUser;
    return user ? { uid: user.uid, email: user.email } : null;
  }
}
