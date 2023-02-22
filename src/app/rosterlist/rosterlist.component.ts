import { DataService } from './../utilities/dataService';
import { Component } from '@angular/core';
import { Player } from '../model/player';
import { lastValueFrom } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'roster',
  templateUrl: './rosterlist.component.html'
})
export class RosterListComponent {
  players: Player[];
  searchKeyWord: string;
  primaryPositions: string[];
  searchKeyword: string;
  selectedPosition: string = "All";
  selectedPlayer: Player = new Player();

  constructor(private dataService: DataService) {
    this.loadPlayers();
  }

  openModal(player: Player): void {
    this.selectedPlayer = player;
    var myModal = new bootstrap.Modal(document.getElementById('detailModel'));
    myModal.show();
  }

  async searchByName(event: any) {
    this.searchKeyword = event.target.value.toLowerCase();
    this.searchRoster();
  }

  async filterByPosition(position: string) {
    this.selectedPosition = position;
    this.searchRoster();
  }

  //search players based on keyword and/or primary position
  private async searchRoster() {
    await lastValueFrom(this.dataService.loadPlayers())
      .then(players => {
        if (!this.searchKeyword) return players;
        return players.filter(x => x.firstName.toLowerCase().includes(this.searchKeyword) || x.lastName.toLowerCase().includes(this.searchKeyword));
      })
      .then(players => {
        this.players = this.selectedPosition == "All" ? players : players.filter(x => x.primaryPosition == this.selectedPosition);
      });
  }

  private loadPlayers(): void {
    this.dataService
      .loadPlayers()
      .subscribe(players => {
        this.players = players;
        this.primaryPositions = [...new Set(players.map(x => x.primaryPosition))];
      })
  }

}
