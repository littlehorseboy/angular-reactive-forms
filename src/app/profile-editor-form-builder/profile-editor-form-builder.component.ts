import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

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
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  ngOnInit(): void {
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  removeAlias() {
    this.aliases.removeAt(this.aliases.length - 1);
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
