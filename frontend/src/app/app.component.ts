import { Component } from '@angular/core';
import * as nipplejs from 'nipplejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  private joystick0 = null;
  private joystick1 = null;
  private joystick2 = null;
  private joystick3 = null;
  joystickOnMove(joystickId){
    console.log(joystickId,'move');
  }

  joystickOnEnd(joystickId){
    console.log(joystickId,'end');
  }

  ngAfterViewInit(){
    this.joystick0 = nipplejs.create({
      zone: document.getElementById('zone_joystick0'),
      mode: 'static',
      position: {left: '50%', top: '50%'},
      color: 'blue'
    });
    this.joystick0.on('move', this.joystickOnMove.bind(this, 0));
    this.joystick0.on('end', this.joystickOnEnd.bind(this, 0));

    this.joystick1 = nipplejs.create({
      zone: document.getElementById('zone_joystick1'),
      mode: 'static',
      position: {left: '50%', top: '50%'},
      color: 'orange'
    });
    this.joystick1.on('move', this.joystickOnMove.bind(this, 1));
    this.joystick1.on('end', this.joystickOnEnd.bind(this, 1));

    this.joystick2 = nipplejs.create({
      zone: document.getElementById('zone_joystick2'),
      mode: 'static',
      position: {left: '50%', top: '50%'},
      color: 'purple'
    });
    this.joystick2.on('move', this.joystickOnMove.bind(this, 2));
    this.joystick2.on('end', this.joystickOnEnd.bind(this, 2));

    this.joystick3 = nipplejs.create({
      zone: document.getElementById('zone_joystick3'),
      mode: 'static',
      position: {left: '50%', top: '50%'},
      color: 'red'
    });
    this.joystick3.on('move', this.joystickOnMove.bind(this, 3));
    this.joystick3.on('end', this.joystickOnEnd.bind(this, 3));
  }
  
}
