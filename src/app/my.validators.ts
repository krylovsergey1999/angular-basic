import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
  static restrictedEmails(constrol: FormControl): { [key: string]: boolean } {
    if (['s@email.ru', 'test@email.tu'].includes(constrol.value)) {
      return {'restrictedEmails': true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@email.ru') {
          resolve({
            uniqEmail: true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
