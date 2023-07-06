import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames: string[] = ["Spiderman", "Thor", "Hulk", "She Hulk", "IronMan", "Bat-Man"];
  public deletedHero?:string;

  public removeLastHero():void {

    this.deletedHero = this.heroNames.pop();

  }

}
