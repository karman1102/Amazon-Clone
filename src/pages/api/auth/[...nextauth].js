import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    // process.env stands for environment variables because we do not want to share private credentials
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // ...add more providers here e.g
        // Providers.Github({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        //   }),
    ],
    //   not adding database
    // A database is optional, but required to persist accounts in a database
    //   database: process.env.DATABASE_URL,
})

// next auth will give a backend enpoint like express 



// handling redirect URI mismatch error:
// go to the url mentioned in the google pop up, sign in into it 
// ADD URI and add localhost:3000  to the first seciton of URIs
// ADD the url similar to localhost:3000/api/auth/callback/google to second section of URI
// ENABLE/SAVE
