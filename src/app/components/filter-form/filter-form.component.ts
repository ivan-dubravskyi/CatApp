import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Breed} from "../../models";
import {debounceTime, filter, Subscription} from "rxjs";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements  OnInit, OnDestroy {
  @Input() breeds: Breed[] = [];
  @Output() filters = new EventEmitter<any>();

  public filtersFormGroup = new FormGroup({
    limit: new FormControl(10, Validators.required),
    breedId: new FormControl(''),
  });

  private filtersSubscription!: Subscription;

  ngOnInit(): void {
    this.filtersSubscription = this.filtersFormGroup.valueChanges
      .pipe(
        debounceTime(500),
        filter(() => this.filtersFormGroup.valid)
      )
      .subscribe((filters) => {
        this.filters.emit(filters);
      });
  }

  ngOnDestroy(): void {
    if (this.filtersSubscription) {
      this.filtersSubscription.unsubscribe();
    }
  }
}
