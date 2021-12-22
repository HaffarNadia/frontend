import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {DomSanitizer, SafeUrl , SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  
  constructor(private service:OrderDetailsService, private sanitizer:DomSanitizer) { 
   
  }
  orderData:any;

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res)=>{

        console.log(res,"res==>");
        this.orderData=res.data;
    });
    


  }

}
