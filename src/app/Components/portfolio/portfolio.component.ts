import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioHeading = "Portfolio Component";
  bgWhite = false;
  isClicked:boolean = false;
  imageSrc:string = "";

  open(img:string)
  {
    this.isClicked = true;  
    this.imageSrc = "assets/Images/"+img;
  }

  close()
  {
    this.isClicked = false;
  }
}
