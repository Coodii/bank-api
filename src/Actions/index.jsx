export const signIn = (token, username, email) =>
{
    return {
        type: 'SIGN_IN',
        payload: {token,username,email}
    }
}