import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

export interface User {
  displayName: string;

}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesCollection: AngularFirestoreCollection<any>;
  messages: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.messagesCollection = this.firestore.collection('messages', ref => ref.orderBy('timestamp'));
    this.messages = this.messagesCollection.valueChanges();
  }

  sendMessage(message: string, sender: string, receiver: string) {
    const timestamp = firebase.firestore.Timestamp.now();
    const messageData = {
      message: message,
      timestamp: timestamp,
      sender: sender,
      receiver: receiver
    };
    this.messagesCollection.add(messageData);
  }

  deleteMessage(messageId: string): Promise<void> {
    
    return this.messagesCollection.doc(messageId).delete();
  }

  // Map the messages to include the document ID as 'id'
  getMessagesWithId(): Observable<any[]> {
    return this.messagesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  // getUserById(userId: string): Observable<User | undefined> {
  //   return this.firestore.collection('users').doc<User>(userId).valueChanges();
  // }
}
