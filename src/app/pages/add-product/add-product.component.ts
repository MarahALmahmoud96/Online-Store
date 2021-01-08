import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NguCarouselConfig} from '@ngu/carousel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addForm: FormGroup;
  firstImage: any;
  imgLoader = false;
  productImages = [];
  public carouselTile: NguCarouselConfig = {
    grid: {xs: 5, sm: 5, md: 5, lg: 5, all: 0},
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
    },
    point: {
      visible: true
    },
    load: 1,
    velocity: 0,
    touch: true,
    loop: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  count = 0;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initComponent();
  }

  initComponent(): void {
    this.addForm = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      width: [null, Validators.compose([Validators.required])],
      length: [null, Validators.compose([Validators.required])],
      depth: [null, Validators.compose([Validators.required])],
      color: [null, Validators.compose([Validators.required])],
      features: [null, Validators.compose([Validators.required])],
      originalPrice: [null, Validators.compose([Validators.required])],
      newPrice: [null, Validators.compose([Validators.required])]
    });
  }

  uploadProductImg(event: any): void {
    if (event.target.files.length <= 5) {
      this.imgLoader = true;
      this.productImages = [];
      for (const file of event.target.files) {
        if (FileReader) {
          const fr = new FileReader();
          fr.onload = () => {
            this.firstImage = fr.result;
            const t = {id: this.count, image: this.firstImage};
            this.productImages.push(t);
            this.productImages.push({});
            this.imgLoader = false;
            ++this.count;
            event.target.value = '';
          };
          fr.readAsDataURL(file);
        }
      }
    }
  }

  addMoreImg(): void {
    document.getElementById('upload-img-file').click();
  }

  uploadMoreImg(event: any): void {
    this.imgLoader = true;
    for (const file of event.target.files) {
      if (FileReader) {
        const fr = new FileReader();
        fr.onload = () => {
          event.target.value = '';
          this.productImages.pop();
          const t = {id: this.count, image: fr.result};
          this.productImages.push(t);
          this.productImages.push({});
          this.imgLoader = false;
          ++this.count;
        };
        fr.readAsDataURL(file);
      }
    }
  }

  removeImage(image: any): void {
    this.productImages = this.productImages.filter(item => {
      return item.id !== image.id;
    });
    if (this.productImages.length > 1) {
      this.firstImage = this.productImages[0].image;
    } else {
      this.productImages.pop();
      this.firstImage = '';
    }
  }

  addProduct(form): void {
    if (this.productImages.length) {
      console.log(form);
    }
  }
}
