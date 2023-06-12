export interface Profile {
    username?: string
    age?: number
    city?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readOnly: boolean
}
