
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '3ed0f2a6dee6f9e88a9a',
            clientSecret: '2fb3d740742485fe2139f1363d10a8f51a8a40b4',
        }),
    ],
    secret: 'qwer1234',
};
export default NextAuth(authOptions); 