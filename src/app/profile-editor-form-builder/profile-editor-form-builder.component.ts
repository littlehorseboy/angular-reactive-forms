import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-form-builder',
  templateUrl: './profile-editor-form-builder.component.html',
  styleUrls: ['./profile-editor-form-builder.component.scss']
})
export class ProfileEditorFormBuilderComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

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
        street: '456 789',
      },
    });
  }
}
