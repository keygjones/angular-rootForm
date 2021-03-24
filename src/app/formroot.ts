import { AbstractControl } from "@angular/forms";
import { FormArray, FormControl, FormGroup, ValidatorsModel } from "@ng-stack/forms";
import { Subject } from "rxjs";

export type FormType = FormControl | FormGroup | FormArray;

export class FormRoot<SkjemaModell extends object = any, ValideringsModell extends object = ValidatorsModel> extends FormGroup<
  SkjemaModell,
  ValideringsModell
  > {
  public submitted = false;
  }