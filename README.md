# anon-asks

Live Event Question Capture System.

## Pre-requisites

- Package Manager: [PNPM](https://pnpm.io/)

## Installation

1. Clone the repo

```sh
git clone https://github.com/lemonnuggets/swym-hiring-task.git
cd swym-hiring-task
```

2. Install NPM packages

```sh
pnpm install
```

3. Copy .env.example file and rename it to .env. Add the api key values.

```sh
mv .env.example .env
```

4. If you want to use PlanetScale, create a new database and add the database url to the .env file. Create a new branch and add connection string to the branch as shadow db.

```js
DATABASE_URL = "";
SHADOW_DATABASE_URL = "";
```

5. Follow instructions [here](https://support.heateor.com/discord-client-id-discord-client-secret/) to get the discord client id and client secret. Add the values to the .env file.

```js
DISCORD_CLIENT_ID = "";
DISCORD_CLIENT_SECRET = "";
```

## Usage

To start server.

```sh
pnpm start
```

## Contact

[Adam Jijo](https://adamjijo.com) - [@adam_jijo](https://twitter.com/adam_jijo) - <hi@adamjijo.com>

Project Link: [https://github.com/lemonnuggets/swym-hiring-task](GitHub)

## Tech Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [PlanetScale](https://planetscale.com)
- [TypeScript](https://typescriptlang.org)
- [create-t3-app](https://create.t3.gg)
