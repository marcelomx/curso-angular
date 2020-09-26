import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderData } from "src/app/components/template/header/header-data.model";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Produtos",
      icon: "storefront",
      routeUrl: "products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    console.log("Navegando....");
    this.router.navigate(["products/create"]);
  }
}
