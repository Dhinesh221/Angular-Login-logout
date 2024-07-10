// src/app/time-schedule/time-schedule.component.ts
import { Component } from '@angular/core';

interface UserSession {
  userId: string;
  loginTime: Date;
  logoutTime?: Date;
}

@Component({
  selector: 'app-time-schedule',
  templateUrl: './time-schedule.component.html',
  styleUrls: ['./time-schedule.component.css']
})
export class TimeScheduleComponent {
  userSessions: UserSession[] = [];
  currentUserId: string = '';

  login() {
    if (!this.currentUserId) {
      alert('UserId is required');
      return;
    }

    const loginTime = new Date();
    const newSession: UserSession = { userId: this.currentUserId, loginTime };
    this.userSessions.push(newSession);
    alert(`Login successful at ${loginTime}`);
  }

  logout() {
    if (!this.currentUserId) {
      alert('UserId is required');
      return;
    }

    const userSession = this.userSessions.find(session => session.userId === this.currentUserId && !session.logoutTime);

    if (!userSession) {
      alert('No active session found for this user');
      return;
    }

    userSession.logoutTime = new Date();
    alert(`Logout successful at ${userSession.logoutTime}`);
  }
}
