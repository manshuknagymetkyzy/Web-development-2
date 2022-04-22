import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company, Vacancy } from '../models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = [];
  vacancis: Vacancy[] = [];
  // @ts-ignore
  id: number;
  clicked = false;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }


}
