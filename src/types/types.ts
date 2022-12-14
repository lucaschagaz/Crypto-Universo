import { ChangeEventHandler } from "react"

export interface ICrypto {
    uuid?:number
    name:string
    price:number
    rank:number
    iconUrl:string
    marketCap:number
    change:number
}
export type CryptosHistoryParamsQuery = { timePeriod: number; coinId: number};

export type SearchProps= {
    handleOnText:ChangeEventHandler<HTMLInputElement>
    value:string
}