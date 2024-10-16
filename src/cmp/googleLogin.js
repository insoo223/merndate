
const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
        console.log(codeResponse);
        const tokens = await axios.post(
            'http://localhost:3000/auth/google', {
                code: codeResponse.code,
            });

        console.log(tokens);
    },
    onError: errorResponse => console.log(errorResponse),
});

export default googleLogin;