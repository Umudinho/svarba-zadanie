import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JitsiComponent } from './jitsi/jitsi.component';
import { GoodByeComponent } from './good-bye/good-bye.component';

const routes: Routes = [
  {
      path: '',
      component: JitsiComponent
  },
  {
      path: 'goodbye',
      component: GoodByeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
