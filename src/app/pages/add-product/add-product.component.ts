import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  constructor(private service:OrderDetailsService) { }
  errormessage:any;
  ngOnInit(): void {
  }
 productForm = new FormGroup({
   'name': new FormControl('', Validators.required),
   'price': new FormControl('', Validators.required),
   'category': new FormControl('', Validators.required),
   'disponibility': new FormControl('1'),
   'pic': new FormControl('', Validators.required) 

 });
 productSubmit() {

    if (this.productForm.valid){
      console.log(this.productForm.value)
      this.service.addProduct(this.productForm.value).subscribe((res)=>{
          console.log(res, 'res=>');
          this.productForm.reset();
      })
    } else {
       this.errormessage = 'all fileds are required';
    }
 }
}
