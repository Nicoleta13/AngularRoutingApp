import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription : Subscription; 

  constructor(private  route : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params
    .subscribe(
      (params: Params)=> {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  //this is not necessary to do because Angular will do it for us,
  // but as an example is goot to know 
  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

}
