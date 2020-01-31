import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello world';
  img = 'https://ru.reactjs.org/logo-og.png';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      // tslint:disable-next-line:max-line-length
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png';
    }, 5000);
  }
}
