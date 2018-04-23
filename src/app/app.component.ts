import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  msg = '';

  items = [
    'Candlestick',
    'Dagger',
    'Revolver',
    'Rope',
    'Pipe',
    'Wrench'
  ];

  days = [];

  count = 16;
  users = [];
  userCount = 3;

  constructor(private dragula: DragulaService) {
    this.dragula.setOptions('bag-items', {
      revertOnSpill: true,
      // moves: function (el, container, handle) {
      //   return handle.className === 'handle';
      // }
    });
    

    for(var i = 1; i< this.count; i++) {
      ;
      this.days.push("Apr " + this.ordinal_suffix_of(i));
    }

    for(var k = 0; k < this.userCount; k++) {
      this.users.push(k)
    }
    // console.log(this.ordinal_suffix_of(i));
  }

  ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

  ngOnInit() {
    this.dragula
      .drag
      .subscribe(value => {
        this.msg = `Dragging the ${ value[1].innerText }!`;
      });

    this.dragula
      .drop
      .subscribe(value => {
        this.msg = `Dropped the ${ value[1].innerText }!`;

        setTimeout(() => {
          this.msg = '';
        }, 1000);
      });
  }
}
