const userState = {
    token : null,
    username : null,
    email : null
}

export const userReducer = (user = userState, action) =>{
    switch (action.type) {
        case 'SIGN_IN':
            return {...user, ...action.payload}
        
        case 'SIGN_OUT':
            return {...user, ...action.payload}

        default: return false
    }
}