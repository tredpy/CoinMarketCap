import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    username?: string
    age?: number
    city?: string
    avatar?: string
    currency?: Currency
    country?: Country
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readOnly: boolean
}
