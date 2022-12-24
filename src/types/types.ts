import { ChangeEventHandler } from "react"


export type TypeLimit = { limit: boolean;};

export interface IAllNews {
  queryContext: object;
  readLink: string;
  sort: object;
  totalEstimatedMatches: number;
  value: INews[];
  _type: string;
}

export interface ICryptosQuery {
  data: {
    coins: ICrypto[];
    stats: IStats;
  };
  status?: "success";
}

export interface IStats {
  total: string;
  total24hVolume: string;
  totalCoins: string;
  totalExchanges: string;
  totalMarketCap: string;
  totalMarkets: string;
}

export interface ICrypto {
      uuid?:number
      name:string
      price:number
      rank:number
      iconUrl:string
      marketCap:number
      change:number
}

export interface INews {
    category?: string;
    datePublished: string;
    description: string;
    image: {
      thumbnail: {
        _type: string;
        contentUrl: string;
        width: number;
        height: number;
      };
      _type: string;
    };
    name: string;
    provider: {
      name: string;
      _type?: string;
      image: {
        _type: string;
        thumbnail: {
          contentUrl: string;
          _type: string;
        };
      };
    }[];
    url?: string;
    _type?: string;
}

export interface ICoin {
  ["24hVolume"]: string;
  allTimeHigh: { price: string; timestamp: number };
  btcPrice: number;
  change: string;
  coinrankingUrl: string;
  color: string;
  description: any;
  iconUrl: string;
  links: LinksCoin[];
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  priceAt: number;
  rank: 1;
  sparkline: number[];
  supply: { confirmed: true; total: "19066281"; circulating: string };
  symbol: string;
  tier: 1;
  uuid: string;
  websiteUrl: string;
}

interface LinksCoin {
  name:string
  type:string 
  url:string
}

export interface ICryptoDetailQuery{
  data: {
    coin: ICoin;
    stats?: IStats;
  };
  status?: "success";
}

export type CryptosHistoryParamsQuery = { timePeriod: string; coinIDToString: string};

export type NewsParamsQuery = { count: number; searchTerm: string};

export type SearchProps= {
  handleOnText:ChangeEventHandler<HTMLInputElement>
  value:string
}