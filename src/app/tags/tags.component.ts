import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../services/car/car.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  carPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    if(!this.carPageTags)
     this.tags = this.carService.getAllTags();
  }

}
