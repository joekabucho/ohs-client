import { Component, OnInit, OnDestroy } from "@angular/core";
import Choices from 'choices.js';
import { HttpClient } from '@angular/common/http';
import { dev } from '../../config/dev';

@Component({
  selector: "app-checkoutpage",
  templateUrl: "checkoutpage.component.html"
})
export class CheckoutpageComponent implements OnInit, OnDestroy {
  url = dev.connect;
  cart:any;
  phone: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCartItems();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("checkout-page");
    var choicesSingle = document.getElementById('choices-single-default');
    if (choicesSingle) {
      new Choices(choicesSingle, {
        searchEnabled: false,
      });
    }
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("checkout-page");
  }
  getCartItems(){
    const userID = localStorage.getItem('profile');
    const userDet ={
      userid: userID
    }
    this.http.post(this.url+'/api/cart/user', userDet).subscribe((cart)=>{
      this.cart = cart;
     // console.log(cart);
    })
  }
  removeFromCart(item){
    const index = this.cart[0].items.indexOf(item);
    this.cart[0].items.splice(index,1);
    this.http.post(this.url+'/api/cart/add', this.cart[0]).subscribe((response)=>{
      //console.log(response);
    })
    console.log(this.cart[0]);
    if(this.cart[0].items.length<1){
       
      this.http.delete(this.url+'/api/cart/'+this.cart[0]._id).subscribe((response)=>{
        console.log(response);
        if(response){
          location.reload();
        }
      })
       
    }
  }
  mpesaCheckout(amount, cart){
    if(this.phone!=undefined || this.phone !=null){ 
    const payload ={
       _id: cart,
       phone: "+"+this.phone.toString(),
       amount: amount
    }
    
        this.http.post(this.url + '/api/cart/pay', payload).subscribe((response)=>{
          if(response){
            alert("Payment Received");
            location.reload();
          }
        })
    }else{
      alert("Please Enter Phone Number")
    }
  }
}
