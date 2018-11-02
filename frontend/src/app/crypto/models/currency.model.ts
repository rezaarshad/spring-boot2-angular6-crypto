export class Currency {
    id: string;
    name: string;
    symbol: string;
    rank: string;
    price_usd: number;
    price_btc: number;
    volume_usd_24h: number;
    market_cap_usd: number;
    available_supply: number;
    total_supply: number;
    max_supply: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    last_updated: number;


    constructor(id: string, name: string, symbol: string, rank: string, price_usd: number, price_btc: number, volume_usd_24h: number, market_cap_usd: number, available_supply: number, total_supply: number, max_supply: number, percent_change_1h: number, percent_change_24h: number, percent_change_7d: number, last_updated: number) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.rank = rank;
        this.price_usd = price_usd;
        this.price_btc = price_btc;
        this.volume_usd_24h = volume_usd_24h;
        this.market_cap_usd = market_cap_usd;
        this.available_supply = available_supply;
        this.total_supply = total_supply;
        this.max_supply = max_supply;
        this.percent_change_1h = percent_change_1h;
        this.percent_change_24h = percent_change_24h;
        this.percent_change_7d = percent_change_7d;
        this.last_updated = last_updated;
    }
}
