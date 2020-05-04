import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('',[Validators.minLength(3), Validators.required])
    });
  }

  submit() {
    console.log('Form: ', this.form);
    const formData = {...this.form.value};
    console.log('Form Data: ', formData);
  }
}

