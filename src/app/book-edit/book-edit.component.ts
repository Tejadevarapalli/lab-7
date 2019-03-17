import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {};
  bookForm: FormGroup;
  Customer_id: string = '';
  Customer_name: string = '';
  Customer_email: string = '';
  Joined_year: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'Customer_id': [null, Validators.required],
      'Customer_name': [null, Validators.required],
      'Customer_email': [null, Validators.required],
      'Joined_year': [null, Validators.required]
    });
    this.getBook(this.route.snapshot.params['id']);
  }
  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.api.updateBook(id, form)
      .subscribe(res => {
        this.router.navigate(['/customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      id = data._id;
      this.bookForm.setValue({
        Customer_id: data.Customer_id,
        Customer_name: data.Customer_name,
        Customer_email: data.Customer_email,
        Joined_year: data.Joined_year
      });
    });
  }
}
