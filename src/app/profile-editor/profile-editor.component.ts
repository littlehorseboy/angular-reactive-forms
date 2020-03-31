import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfileSetValue() {
    this.profileForm.setValue({
      firstName: 'Otis',
      lastName: 'Ma',
    });
  }

  updateProfilePatchValue() {
    this.profileForm.patchValue({
      firstName: 'Otis',
      lastName: 'Ma',
      address: {
        street: '123 321',
      },
    });
  }
}
