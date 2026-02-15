# Contributing to Martin Électricité

Merci d'être intéressé par la contribution à ce projet! 

## Comment contribuer

### 1. Fork le repository
```bash
git clone https://github.com/votre-username/martin-electricite.git
```

### 2. Créer une branche feature
```bash
git checkout -b feature/ma-fonctionnalite
```

### 3. Faire les changements
- Garder le code clean et commenté
- Annoncer les changements substantiels dans les commits
- Vérifier que le type-check passe: `npm run type-check`

### 4. Tester localement
```bash
npm run dev     # Test en développement
npm run build   # Vérifier que la build fonctionne
npm run preview # Prévisualiser la production
```

### 5. Commit et Push
```bash
git add .
git commit -m "✨ feat: description courte"
git push origin feature/ma-fonctionnalite
```

### 6. Pull Request
- Décrire clairement les changements
- Inclure des screenshots si pertinent
- S'assurer que la build GitHub Actions passe

## Standards de Code

- ✅ **TypeScript strict**: Pas de `any` sans bonne raison
- ✅ **Composants fonctionnels**: Utiliser React Hooks
- ✅ **Noms explicites**: Variables et fonctions avec noms clairs
- ✅ **Commentaires**: Expliquer la logique complexe
- ✅ **Espaces**: 2 espaces pour l'indentation

## Commit Messages

Utiliser ce format:
```
<type>: <message court>

<description détaillée si nécessaire>
```

Types:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Format, semicolons, etc.
- `refactor`: Restructuration du code
- `perf`: Amélioration de performance
- `test`: Ajout de tests

## Questions?

N'hésitez pas à ouvrir une Issue pour poser vos questions!

Merci pour votre contribution! 🎉
