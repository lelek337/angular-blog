import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login-form-ui',
  templateUrl: './admin-login-form-ui.component.html',
  styleUrls: ['./admin-login-form-ui.component.scss']
})
export class AdminLoginFormUiComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  @Input() formError = 'Foo';
  @Output() login = new EventEmitter();

  ngOnInit(): void {
    // const formData = { //new FormGroup({})
    //   login: '', //new FormControl(')
    //   password: '', //new FormControl(')
    // }
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    console.log('Ui', this.formGroup.value);
    this.login.emit(this.formGroup.value);
  }

}
