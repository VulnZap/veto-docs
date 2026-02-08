FROM node:22-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --prefer-offline --ignore-scripts || pnpm install --ignore-scripts

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/package.json /app/package.json
COPY . .
RUN pnpm fumadocs-mdx && pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S app -u 1001 -G nodejs
COPY --from=build --chown=app:nodejs /app/.next/standalone ./
COPY --from=build --chown=app:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=app:nodejs /app/public ./public
USER app
EXPOSE 8080
CMD ["node", "server.js"]
