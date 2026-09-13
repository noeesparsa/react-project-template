# React Project Template

Starter Next.js avec TypeScript strict, Tailwind CSS, shadcn/ui, Biome et Vitest.

## Prerequis

- Node.js LTS
- npm

Si nvm est installe:

```bash
nvm install
nvm use
```

## Developpement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur Next.js en developpement |
| `npm run build` | Construit l'application pour la production |
| `npm run start` | Lance la version de production |
| `npm run lint` | Execute les verifications Biome |
| `npm run format` | Formate le code avec Biome |
| `npm run format:check` | Verifie le formatage sans modifier les fichiers |
| `npm run typecheck` | Execute la verification TypeScript stricte |
| `npm test` | Execute les tests Vitest |
| `npm run test:watch` | Lance Vitest en mode watch |

## Organisation

- `src/app/`: routes et layouts Next.js App Router
- `src/components/ui/`: composants shadcn/ui
- `src/lib/utils.ts`: utilitaire `cn` pour composer les classes Tailwind
- `vitest.config.mts`: configuration des tests unitaires
- `.github/dependabot.yml`: mises a jour npm hebdomadaires, limitees a 4 PR ouvertes
