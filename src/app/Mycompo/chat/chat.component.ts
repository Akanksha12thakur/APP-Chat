import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { ChatService, User } from 'src/app/services/chat.service'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages!: Observable<any[]>;
  newMessage: string = '';

  constructor(private chatService: ChatService, private authService: AuthService) {}

  ngOnInit() {
    this.messages = this.chatService.getMessagesWithId();
  }

  async sendMessage() {
    const currentUser = await this.authService.getCurrentUser();
    if (currentUser) {
      const senderId = currentUser.uid;
      const receiverId = 'GA5mn7C1d1famV5QkgH3D2xreAo1'; // Replace 'ReceiverUserID' with the unique ID of the receiver

      if (this.newMessage.trim() !== '') {
        this.chatService.sendMessage(this.newMessage, senderId, receiverId);
        this.newMessage = '';
      }
    } else {
      console.log('User is not logged in.');
    }
  }

  deleteMessage(messageId: string) {
    this.chatService.deleteMessage(messageId);
  }

  confirmDelete(messageId: string) {
    const isConfirmed = confirm('Are you sure you want to delete this message?');
    if (isConfirmed) {
      this.deleteMessage(messageId);
    }
  }

  // getUserById(userId: string): Observable<User | undefined> {
  //   return this.chatService.getUserById(userId);
  // }
}
