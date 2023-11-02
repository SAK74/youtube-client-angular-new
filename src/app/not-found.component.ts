import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="flex justify-center items-center gap-4">
    <img src="assets/404.png" alt="not-found" width="100" />
    <span class="text-lg text-slate-500 font-medium"
      >Sorry, smth went<br />wrong((</span
    >
  </div> `,
})
export class NotFoundComponent {
  @HostBinding('class') class = 'w-full h-full flex justify-center items-center';
}
