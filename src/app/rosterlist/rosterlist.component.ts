import { DataService } from './../utilities/dataService';
import { Component } from '@angular/core';
import { Player } from '../entity/player';

@Component({
  selector: 'roster',
  templateUrl: './rosterlist.component.html'  
})
export class RosterlistComponent {
    players: Player[];

    constructor(private service : DataService) {
        this.service.getPlayers().subscribe(results => this.players = results);
    }


}
