import { Component, inject, HostBinding } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { dateValidator } from 'admin/services/date-validator';
import { Store } from '@ngrx/store';
import { CustomCard } from 'redux/models/store.model';
import { addCustomCard } from 'redux/actions/custom-cards.actions';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent {
  @HostBinding('class') class = 'flex justify-center py-8';

  fb = inject(NonNullableFormBuilder);

  adminForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', [Validators.maxLength(255)]],
    img: ['', Validators.required],
    video: ['', Validators.required],
    creationDate: ['', [Validators.required, dateValidator]],
    tags: this.fb.array([
      this.fb.control('', { validators: Validators.required }),
    ]),
  });

  entries: (keyof typeof this.adminForm.controls)[] = [
    'title',
    'description',
    'img',
    'video',
    'creationDate',
  ];

  getError(name: keyof typeof this.adminForm.controls) {
    const field = this.adminForm.controls[name];
    switch (true) {
      case field.hasError('required'):
        return `Please enter a ${
          name !== 'img' && name !== 'video' ? name : `link to the ${name}`
        }`;
      case field.hasError('minlength'):
        return `The ${name} is too short`;
      case field.hasError('maxlength'):
        return `The ${name} is too long`;
      case field.hasError('dateInFuture'):
        return `The ${name} is is invalid`;
      default:
        return null;
    }
  }

  addTag() {
    this.adminForm.controls.tags.push(
      this.fb.control('', { validators: Validators.required }),
    );
  }

  reset() {
    this.adminForm.reset();
    this.adminForm.controls.tags.clear();
    this.adminForm.controls.tags.push(
      this.fb.control('', { validators: Validators.required }),
    );
  }

  private store = inject(Store);

  submit() {
    if (this.adminForm.invalid) {
      return;
    }
    this.store.dispatch(addCustomCard(this.adminForm.value as CustomCard));
  }
}
