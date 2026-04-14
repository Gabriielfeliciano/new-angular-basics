import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = 'Hello Word!';

  protected isDisable = false;

  protected clickButton(){
    console.log("Button clicked");
    this.isDisable = true;
  }

  protected count = signal(0);

  protected more(){
    this.count.update(value => value + 1)
  }

  protected less(){
    this.count.update(value => value - 1)
  }

  protected resertCount(){
    this.count.set(0)
  }
}
