import { CryptoCurrenciesType, FiatCurrenciesType } from 'core/types'

export type SBPairsType =
  | 'BTC-EUR'
  | 'BCH-EUR'
  | 'ETH-EUR'
  | 'PAX-EUR'
  | 'XLM-EUR'
  | 'BTC-GBP'
  | 'BCH-GBP'
  | 'ETH-GBP'
  | 'PAX-GBP'
  | 'XLM-GBP'
  | 'BTC-USD'
  | 'BCH-USD'
  | 'ETH-USD'
  | 'PAX-USD'
  | 'XLM-USD'

export type SBPairType = {
  buyMax: string
  buyMin: string
  pair: SBPairsType
}

export type SBMoneyType = {
  amount: string
  symbol: keyof FiatCurrenciesType
}

export type SBSuggestedAmountType = Array<
  {
    [key in keyof FiatCurrenciesType]: Array<string>
  }
>

export type SBOrderType = {
  expiresAt: string
  id: string
  inputCurrency: keyof FiatCurrenciesType
  inputQuantity: string
  insertedAt: string
  outputCurrency: keyof CryptoCurrenciesType
  outputQuantity: string
  pair: SBPairsType
  state: SBOrderStateType
  updatedAt: string
}

export type SBOrderStateType =
  | 'PENDING_CONFIRMATION'
  | 'PENDING_DEPOSIT'
  | 'DEPOSIT_MATCHED'
  | 'FINISHED'
  | 'CANCELED'
  | 'FAILED'
  | 'EXPIRED'

export type FiatEligibleType = {
  eligible: boolean
  paymentAccountEligible: boolean
  simpleBuyTradingEligible: boolean
}