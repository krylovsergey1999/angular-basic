import {FormControl} from '@angular/forms';

export class MyValidators {
  static restrictedEmails(constrol: FormControl): { [key: string]: boolean } {
    if (['s@email.ru','test@email.tu'].includes(constrol.value)) {
      return {'restrictedEmails': true};
    }
    return null;
  }
}
