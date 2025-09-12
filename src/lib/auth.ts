import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'

import { db } from '../db/drizzle'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: {strategy: 'jwt'},
  providers: [GitHub, Google],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token.id) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})
