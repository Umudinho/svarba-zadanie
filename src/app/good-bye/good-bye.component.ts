import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good-bye',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './good-bye.component.html',
  styleUrls: ['./good-bye.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodByeComponent {
  constructor(private router: Router) { }

  navigateToHome() {
      this.router.navigate(['/']);
  }
}
