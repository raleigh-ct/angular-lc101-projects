import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Amazing Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.cleveland19.com/resizer/oYdtj4IDxWdSSKn7GoDAHjs2o8U=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/GIDLHC3O2ZDWNLJD57OMCIBBUM.jpg';
  image3 = 'https://www.cleveland.com/resizer/T8ecyXXN8GKeBZj5EBaFZZYsEGk=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JWT6QGXJQ5BXHKACU4WLWSV54M.jpg';

  constructor() { }

  ngOnInit() {
  }

}