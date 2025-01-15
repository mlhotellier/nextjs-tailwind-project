# Étape 1 : Construction
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Compiler le projet TypeScript (y compris next.config.ts)
RUN npx next build

# Étape 2 : Image finale
FROM node:18-alpine AS runner

WORKDIR /app

# Copier les fichiers nécessaires pour exécuter l'application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Démarrer l'application
CMD ["npm", "run", "start"]
