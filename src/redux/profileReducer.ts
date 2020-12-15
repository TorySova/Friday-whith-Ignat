export type UserType = {
    // created: string
    // email: string
    // isAdmin: boolean
    // name: string
    // publicCardPacksCount: number
    // rememberMe: boolean
    // token: string
    // tokenDeathTime: number
    // updated: string
    // verified: boolean
    // __v: number
    // _id: string
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту	
    rememberMe: boolean;

    error?: string;
}

export type ProfileStateType = {
    user: UserType
}

const initState: ProfileStateType = {
    user: {
        _id: '0',
        email: '',
        name: 'test',
        avatar: '',
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,

        error: '',
    }
};

export const profileReducer = (state = initState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profile/SET_PROFILE': {
            return {
                ...state,
                user: action.user
            }
        }
        default: return state;
    }
};

export type ProfileActionsType = ReturnType<typeof setProfileAC>;

export const setProfileAC = (user: UserType) => ({
    type: 'profile/SET_PROFILE',
    user
} as const); 