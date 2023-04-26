import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any
  public getAllPokemons: any

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe(
      res=> {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
        console.log(this.setAllPokemons)
      })
  }

  public getSearch(v: string ){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(v.toLowerCase())
    })

    this.getAllPokemons = filter
  }

}
