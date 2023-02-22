import { Injectable } from "@angular/core";

@Injectable()
export class CacheService {
    get<T>(key: string): T | null {
        const cachedValue = localStorage.getItem(key);
        if(!cachedValue)
            return null;
        return JSON.parse(cachedValue);
    }

    set(key: string, value: any): void {
        if(!key || !value) return;

        localStorage.setItem(key, JSON.stringify(value));
    }
    
}