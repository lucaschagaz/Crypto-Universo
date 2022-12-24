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

export interface ICrypto {
  data:{
    coin:{
    uuid?:number
    name:string
    price:number
    rank:number
    iconUrl:string
    marketCap:number
    change:number
  }
  }
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
            
export type CryptosHistoryParamsQuery = { timePeriod: string; coinIDToString: string};

export type NewsParamsQuery = { count: number; searchTerm: string};

export type SearchProps= {
  handleOnText:ChangeEventHandler<HTMLInputElement>
  value:string
}