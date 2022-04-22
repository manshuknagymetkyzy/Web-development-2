import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  id: any;
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private vacancyservice: VacancyService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getVacancies(this.id);
  }

  getVacancies(id: number){
    
    this.companyService.getCompanyVacancies(id).subscribe((photos) => {
        this.vacancies = photos;
        console.log(this.vacancies);
    });
    
  }
 
}
