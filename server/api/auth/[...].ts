import { NuxtAuthHandler } from '#auth'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'

export default NuxtAuthHandler({
	secret: useRuntimeConfig().authSecret,
	providers: [
		// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
		GitHubProvider.default({
			clientId: 'enter-your-client-id-here',
			clientSecret: 'enter-your-client-secret-here'
		})
	],
	// @ts-expect-error
	adapter: PrismaAdapter(new PrismaClient()),
})