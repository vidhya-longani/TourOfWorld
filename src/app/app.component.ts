import { Component } from '@angular/core';
import { Country} from './country/country';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<div>
  				<div class="float-left">
		  			<h2>My Travel List</h2>
					<ul class="heroes">
					  <li *ngFor="let country of countries" (click) = "onSelect(country)" [class.selected] = 'selectedCountry == country'>
					    <span class="badge">{{country.id}}</span> {{country.name}}
					  </li>
					</ul>
				</div>
				<app-country [country]='selectedCountry'></app-country>
			</div>`,
  styles: [`
  		  .float-left {
  		  	float: left;
  		  }
		  .selected {
		    background-color: #CFD8DC !important;
		    color: white;
		  }
		  .heroes {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
		  }
		  .heroes li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
		  }
		  .heroes li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
		  }
		  .heroes li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
		  }
		  .heroes .text {
		    position: relative;
		    top: -3px;
		  }
		  .heroes .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
		  }
	`]
})
export class AppComponent {
  	title = 'World Tour';
  	countries : Country[] = [
	  { id: 11, name: 'France' },
	  { id: 12, name: 'Malaysia' },
	  { id: 13, name: 'Singapore' },
	  { id: 14, name: 'Dubai' },
	  { id: 15, name: 'Thailand' },
	  { id: 16, name: 'New Zealand' },
	  { id: 17, name: 'England' },
	  { id: 18, name: 'Indonesia' },
	  { id: 19, name: 'Australia' },
	  { id: 20, name: 'Canada' }
	];
	selectedCountry : Country;

	onSelect(country: Country){
		this.selectedCountry = country;
	}
}
