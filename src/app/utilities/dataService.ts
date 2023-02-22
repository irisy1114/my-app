import { CacheService } from './cacheservices';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Player } from "../model/player";
import { lastValueFrom, map, Observable, of } from "rxjs";

@Injectable()
export class DataService {
    private dataFilePath: string = "assets/data/data.json";
    private dataCacheKey: string = "roster_data_cache";

    constructor(private httpClient: HttpClient, private cacheService: CacheService) {

    }

    loadPlayers(): Observable<Player[]> {
        // read from cache
        const players = this.cacheService.get<Player[]>(this.dataCacheKey);
        if (players)
            return of(players);

        // read from data filter
        return this.httpClient.get<Player[]>(`${this.dataFilePath}`).pipe(map(results => {
            // cache results if valid
            if (results && results.length > 0)
                this.cacheService.set(this.dataCacheKey, results);
            return results;
        }))
    }

    // getPlayers(): Observable<Player[]> {
    //     return this.httpClient.get<Player[]>('assets/data/data.json');
    // }
    
     //get a single player
    async getPlayer(playerId: number): Promise<Player | undefined> {
    return await lastValueFrom(this.loadPlayers()).then(players => players.find(x => x.id == playerId));
  }
}