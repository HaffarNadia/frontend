import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 productForm = new FormGroup({
   'name': new FormControl('', Validators.required),
   'price': new FormControl('', Validators.required),
   'category': new FormControl('', Validators.required),
   'pic': new FormControl('', Validators.required) 

 });
 productSubmit() {

    console.log(this.productForm.value);
 }
}
