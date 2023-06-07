import { Country } from 'shared/const/common';

export interface Profile {
    username: string
    age: number
    country: Country
    city: string
    avatar: string
}

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
