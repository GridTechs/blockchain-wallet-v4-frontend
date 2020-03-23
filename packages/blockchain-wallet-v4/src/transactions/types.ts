import { RemoteDataType } from 'core/types'

export type IOType = {
  accountIndex: number
  address: string
  amount: number
  change: boolean
  coinType: string
  isWatchOnly: boolean
  label: string
  receiveIndex: number
}
export type BtcTxType = {
  amount: number
  blockHeight: number
  description: string
  double_spend: boolean
  fee: RemoteDataType<string, number>
  from: string
  fromWatchOnly: boolean
  hash: string
  inputs: Array<IOType>
  insertedAt: number
  outputs: Array<IOType>
  time: number
  timeFormatted: string
  to: string
  toAddress: string
  toWatchOnly: boolean
  type: 'sent' | 'received' | 'transferred'
}
export type BchTxType = BtcTxType

export type ProcessedTxType = BtcTxType | BchTxType