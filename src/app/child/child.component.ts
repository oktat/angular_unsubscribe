import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  src = interval(2000);
  id = Date.now();
  
  obs !: Subscription;
  
  constructor() { }

  ngOnInit(): void {
    console.log('Az alkalmazás indul' + this.id)

    this.obs = this.src.subscribe(() => {
      console.log('Érkezett: ' + this.id)
    })
  }


  ngOnDestroy() {
    console.log('Komponens vége' + this.id);
    this.obs.unsubscribe();
  }

}
