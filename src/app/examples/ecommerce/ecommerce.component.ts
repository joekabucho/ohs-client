import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dev } from '../../config/dev';

@Component({
  selector: 'app-ecommerce',
  templateUrl: 'ecommerce.component.html'
})
export class EcommerceComponent implements OnInit, OnDestroy {

  products: any;
  url = dev.connect;
  profile: any;
  userDetails: any;
  cart: any = [];


  constructor(private http: HttpClient) {
     this.getUser();
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('ecommerce-page');
    this.getUsersDesigns();

    //  const length = (this.products.length/3).toFixed(0);


  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('ecommerce-page');
  }

  loadmore(){
    (document.getElementById('loadmore').style.display='block');
    (document.getElementById('loadbtn').style.display='none');
  }
  less(){
    (document.getElementById('loadmore').style.display='none');
    (document.getElementById('loadbtn').style.display='block');
  }
  getUsersDesigns() {
    const payload ={
      userid: this.profile
    }
    return this.http.post(this.url + '/api/files/user', payload).subscribe((data)=>{
      this.products = data;
    });
  }
  getUser(){
    this.profile = localStorage.getItem('profile')
   }

   addToCart(item){
     //console.log(item);
     this.getUserDetails(item);
   }
   getUserDetails(item){
    const amount = parseFloat(item.amount);
    const userID = localStorage.getItem('profile');
    const userDet ={
      userid: userID
    }
    this.http.post(this.url +'/api/cart/user', userDet).subscribe((cart)=>{
      this.cart = cart;
      if(this.cart.length >0) {
       const items = this.cart[0].items
       var amountc = this.cart[0].amount
       amountc = amountc + amount
       items.push(item)
       this.cart[0].items = items;
       this.cart[0].amount = amountc;

       this.http.post(this.url + '/api/cart/add', this.cart[0]).subscribe((response)=>{
        //console.log(response);
        alert('Added item to cart');
      });

      }
      else{
        //console.log("Doesnt Exist")
        const items = [];
        items.push(item);
        const payload ={
          user: userID,
          items,
          amount,
          status: 'Pending'
        }
        this.http.post(this.url + '/api/cart', payload).subscribe((response)=>{
          alert('Added item to cart');
        });
      }
    });
  }
}
