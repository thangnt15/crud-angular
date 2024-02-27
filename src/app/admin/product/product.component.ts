import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private http: HttpClient) { }
  
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    cate_id: new FormControl(1, [Validators.required]),
    image: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
  })
  mess = '';
  onSubmit() {
    let data = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      cate_id: this.productForm.get('cate_id')?.value,
      image: this.productForm.get('image')?.value,
      detail: this.productForm.get('detail')?.value,
    }
    this.http.post('http://localhost:3000/products', data).subscribe((data: any) => {
      if (data.id !== '') {
        this.mess = 'ok';
        this.productForm.setValue({
          name: '',
          price: '',
          cate_id: 1,
          image: '',
          detail: ''
        })
      }
      else {
        this.mess = 'Error'
      }
    })
  }
}
