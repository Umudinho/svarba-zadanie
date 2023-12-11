import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-jitsi',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JitsiComponent {
  
  domain: string = "video.svarba.sk";
  room: any;
  options: any;
  api: any;
  user: any;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
      this.room = 'ŠVARBA s.r.o.';
      this.user = {
          name: 'Umud Novruzov'
      }
  }

  ngAfterViewInit(): void {
      this.options = {
          roomName: this.room,
          width: 1000,
          height: 500,
          configOverwrite: { prejoinPageEnabled: false },
          interfaceConfigOverwrite: {
          },
          parentNode: document.querySelector('#jitsi-iframe'),
          userInfo: {
              displayName: this.user.name
          }
      }

      this.api = new JitsiMeetExternalAPI(this.domain, this.options);

      this.api.addEventListeners({
          readyToClose: this.handleClose,
          participantLeft: this.handleParticipantLeft,
          participantJoined: this.handleParticipantJoined,
          videoConferenceJoined: this.handleVideoConferenceJoined,
          videoConferenceLeft: this.handleVideoConferenceLeft,
          audioMuteStatusChanged: this.handleMuteStatus,
          videoMuteStatusChanged: this.handleVideoStatus
      });
  }


  handleClose = () => {
      console.log("handleClose");
  }

  handleParticipantLeft = async (participant: any) => {
      console.log("handleParticipantLeft", participant);
      const data = await this.getParticipants();
  }

  handleParticipantJoined = async (participant: any) => {
      console.log("handleParticipantJoined", participant);
      const data = await this.getParticipants();
  }

  handleVideoConferenceJoined = async (participant: any) => {
      console.log("handleVideoConferenceJoined", participant);
      const data = await this.getParticipants();
  }

  handleVideoConferenceLeft = () => {
      console.log("handleVideoConferenceLeft");
      this.router.navigate(['/goodbye']);
  }

  handleMuteStatus = (audio: any) => {
      console.log("handleMuteStatus", audio);
  }

  handleVideoStatus = (video: any) => {
      console.log("handleVideoStatus", video);
  }

  getParticipants() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(this.api.getParticipantsInfo());
          }, 500)
      });
  }
}
