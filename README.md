# Martin Électricité — Ingénierie & Lumière

Un site web moderne et performant showcasing les services d'électricité premium avec une interface 3D immersive et des animations fluides.

## 🚀 Caractéristiques

- ⚡ **Next-Gen Stack**: React 19 + TypeScript + Vite
- 🎨 **Design Moderne**: Animations fluides avec Framer Motion
- 🌐 **3D Graphics**: Three.js et React Three Fiber
- 📱 **Responsive**: Optimisé pour tous les appareils
- 🚄 **Performance**: Optimisation du bundle et lazy loading
- 🔒 **Type-Safe**: TypeScript strict mode
- 🎯 **SEO Ready**: Meta tags et structure sémantique

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation Locale

1. **Cloner le repository:**
   ```bash
   git clone https://github.com/votre-username/martin-electricite.git
   cd martin-electricite
   ```

2. **Installer les dépendances:**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement:**
   - Copier `.env.example` vers `.env.local`
   - Ajouter votre clé Gemini API:
   ```bash
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Lancer le serveur de développement:**
   ```bash
   npm run dev
   ```
   L'application sera disponible sur `http://localhost:3000`

## 📦 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Crée la build optimisée |
| `npm run preview` | Prévisualise la build de production |
| `npm run type-check` | Vérifie les types TypeScript |

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter votre repository:**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer "New Project"
   - Importer votre repository GitHub

2. **Configurer les variables d'environnement:**
   - Dans les settings du projet Vercel
   - Ajouter `VITE_GEMINI_API_KEY` avec votre clé API

3. **Déployer:**
   - Vercel détecte automatiquement la configuration
   - La build et le déploiement se font automatiquement

### GitHub

1. **Créer un repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/martin-electricite.git
   git push -u origin main
   ```

2. **Dépôt prêt** ✅
   - Le fichier `vercel.json` configure automatiquement le build
   - Le `.gitignore` exclut les fichiers sensibles
   - Le `.env.local` est automatiquement ignoré

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Background3D.tsx    # Arrière-plan 3D
│   ├── Navbar.tsx          # Navigation
│   └── Footer.tsx          # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Legal.tsx
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée
├── index.html          # Template HTML
├── vite.config.ts      # Configuration Vite
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances et scripts
```

## 🔐 Variables d'Environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `VITE_GEMINI_API_KEY` | Clé API Gemini | ✅ Oui |

## ⚙️ Configuration

- **Vite**: Optimisation du bundle, sourcemaps désactivés en production
- **TypeScript**: Strict mode activé pour la sécurité du type
- **React Router**: Hash routing pour compatibility statique
- **Vercel**: Auto-configuration via `vercel.json`

## 🐛 Troubleshooting

### Build échoue avec erreur TypeScript
```bash
npm run type-check  # Vérifier les types
```

### Application ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Variables d'environnement non reconnues
- Vérifier que les variables commencent par `VITE_`
- Redémarrer le serveur de développement après modification

## 📄 Licence

@2024 Martin Électricité. Tous droits réservés.

## 📧 Support

Pour plus d'informations, visitez [www.martin-electricite.com](https://www.martin-electricite.com)
