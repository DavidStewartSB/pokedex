import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon"
  private urlName: string = "https://pokeapi.co/api/v2/pokemon-species"

  public pokemon: any
  public isLoading = false
  public errorApi = false

  constructor(private activetedRoute: ActivatedRoute, private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {
    const id = this.activetedRoute.snapshot.params['id']
    const pokemon = this.pokeService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeService.apiGetPokemons(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {this.pokemon = res; this.isLoading = true},
      error: (err) => {this.errorApi == true},
      complete: () => console.log('foi')

    })
  }

}
