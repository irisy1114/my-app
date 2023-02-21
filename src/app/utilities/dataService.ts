import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Player } from "../entity/player";
import { Observable } from "rxjs";

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>('assets/data/data.json');
    }
}