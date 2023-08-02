import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Breed} from "../../models";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements  OnInit {
  @Input() breeds: Breed[] = [];
  @Output() filters = new EventEmitter<any>();

  public filtersFormGroup = new FormGroup({
    limit: new FormControl(10),
    breedId: new FormControl(''),
  });

  ngOnInit(): void {
    this.filtersFormGroup.valueChanges
      .pipe(debounceTime(500))
      .subscribe((filters) => {
      this.filters.emit(filters);
    });
  }
}
