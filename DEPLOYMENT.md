# 🚀 Guide de Déploiement Complet

## Prérequis

- Repository GitHub créé
- Compte Vercel gratuit
- Votre clé API Gemini

## 📍 Étape 1: Préparation GitHub

### 1.1 Initialiser le repository local

```bash
cd c:\Users\emirm\Documents\Site_demo_2
git init
git add .
git commit -m "🎉 Initial commit - Martin Électricité website"
git branch -M main
```

### 1.2 Créer le repository sur GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. **Repository name**: `martin-electricite`
3. **Description**: `Modern website for Martin Électricité with 3D animations`
4. Laisser **Public** ou **Private** selon votre préférence
5. Cliquer "Create repository"

### 1.3 Connecter et pousser le code

```bash
git remote add origin https://github.com/YOUR_USERNAME/martin-electricite.git
git push -u origin main
```

## 🌐 Étape 2: Configurer Vercel

### 2.1 Accéder à Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub (ou créer un compte)

### 2.2 Importer le projet

1. Cliquer "New Project"
2. Sélectionner "Import Git Repository"
3. Chercher et sélectionner `martin-electricite`
4. Cliquer "Import"

### 2.3 Configurer le projet Vercel

**Project Name**: `martin-electricite` (ou votre choix)

**Framework Preset**: Vite (doit être détecté automatiquement - sinon cocher manuellement)

**Build Settings**:
- **Build Command**: `npm run build` ✅ (pré-rempli)
- **Output Directory**: `dist` ✅ (pré-rempli)
- **Install Command**: `npm install` ✅ (pré-rempli)

### 2.4 Ajouter les variables d'environnement

1. Aller dans "Environment Variables"
2. Cliquer "Add"
3. **Name**: `VITE_GEMINI_API_KEY`
4. **Value**: Coller votre clé API Gemini
5. Sélectionner **Production** dans tous les environnements
6. Cliquer "Save"

### 2.5 Déployer

Cliquer "Deploy" - le déploiement prend 1-3 minutes ⏳

## ✅ Vérification Post-Déploiement

### Sur Vercel

- Vérifier que le build est "Success" ✅
- Cliquer sur le domaine Vercel pour tester le site
- Vérifier que:
  - La page charge correctement
  - Le 3D background s'affiche
  - Les animations fonctionnent
  - Les routes fonctionnent (navigation)

### Domaine personnalisé (optionnel)

1. Dans Vercel, aller dans "Settings" → "Domains"
2. Ajouter votre domaine personnalisé
3. Suivre les instructions de configuration DNS

## 🔄 Mise à Jour du Code

À chaque modification du code:

```bash
git add .
git commit -m "Description des changements"
git push origin main
```

Vercel redéploiera automatiquement! 🚀

## 🆘 Troubleshooting

### Build échoue sur Vercel

1. Vérifier les logs Vercel (onglet "Deployments" → "Build Logs")
2. Solutions communes:
   - Variables d'environnement manquantes
   - Erreurs TypeScript (lancer `npm run type-check` localement)
   - Dépendances manquantes

### Site montre "Cannot GET /"

- Assurez-vous que le `vercel.json` est présent et correct
- Ce fichier est fourni et configuré automatiquement

### Variables d'environnement non chargées

- Vérifier que le nom commence par `VITE_` **exactement**
- Redéployer après modification des variables

## 📊 Monitoring

### Vérifier les analytics Vercel

1. Dashboard Vercel
2. Onglet "Analytics"
3. Voir:
   - Temps de build
   - Performance
   - Erreurs

## 🎯 Bonnes Pratiques

✅ **À faire**:
- Utiliser le `.env.local` pour le développement
- Toujours tester `npm run build` localement avant de pusher
- Vérifier les logs de build sur Vercel
- Garder les dépendances à jour (`npm update`)

❌ **À éviter**:
- Ne jamais committer `.env.local`
- Ne pas modifier `vercel.json` sans raison
- Ne pas pointer vers des domaines externes non sécurisés

## 📚 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com/)
- [Three.js Documentation](https://threejs.org/docs/)

---

**Status**: ✅ Prêt pour production

Tous les fichiers nécessaires sont en place. Bon déploiement! 🎉
