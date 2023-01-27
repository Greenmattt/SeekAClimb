## Setup de l'environnement react native: 

/!\ Pour les deux installation suivantes, soyez sûr que les PATH soient correctement créés
1. [Télécharger node.js](https://nodejs.org/en/download/)
2. [Télécharger Android Studio](https://developer.android.com/studio)

3. Configurer la variable ANDROID_HOME de la manière suivante :
    - Ouvrez le panneau de configuration windows
    - Allez dans *Comptes d'utilisateurs*, puis *Comptes d'utilisateurs* à nouveau 
    - Cliquez sur *Modifier vos variables d'environnement* (à gauche de l'écran)

    - En parallèle lancez Android Studio
    - Cliquer sur *More actions* puis *SDK Manager*
    - Copier le chemin à côté de **Android SDK Location**
    
    - Revenir sur la page Variables d'environnement
    - Cliquer sur *Nouvelle...* 
    - En nom de la variable mettez : ANDROID_HOME
    - Valeur de la variable : Coller le chemin que vous avez pris dans Android Studio
    - Valider.

4. Dans une fenêtre cmd (ou PowerShell) aller dans le dossier où vous voudrez créer votre projet
5. Tappez : `npx create-expo-app NomDuProjet`
6. Puis `cd NomDuProjet`
7. Enfin vous pouvez lancer le dossier dans vs code avec la commande : `code .` (Si votre variable PATH de vs code existe)

# En cas de problème cliquez sur [ce lien](https://reactnative.dev/docs/environment-setup) pour voir la doc officiel du setup de l'environnement react native

## Setup de notre projet :

1. Commencez par copier les fichier .js et app.json depuis le dossier github et les coller dans votre dossier contenant le setup react native (Il faut remplacer les fichiers ayant le même nom)
2. Puis copiez les icons se trouvant dans le dossier assets du github et collez les dans le dossier assets du projet react native
3. Dans une fenêtre cmd (ou PowerShell) aller dans le dossier de votre projet
4. Installer les librairies nécessaires avec les commandes suivantes : 
    - `npx expo install expo-splash-screen`
    - `npm install @react-navigation/material-top-tabs react-native-tab-view`
    - `npx expo install react-native-pager-view`
    - `npm install react-native-dropdown-picker`
    - `npm install --save @ptomasroos/react-native-multi-slider`

## Lancement du code : 

Plusieurs manières sont possibles pour lancer le code : 
- Vous pouvez aller sur un compileur en ligne tel que [Snack](https://snack.expo.dev/) ; pour importer le repo git, il suffit de copier le lien de la branche à tester. Puis vous pouvez le coller en cliquant en haut à gauche à droite de **Project** sur les trois petits points puis `import git repository`

- Pour voir l'application en entier suivez les étapes suivantes : 
    1. Sur votre téléphone Android activez le mode développeur si ce n'est pas déjà fait dans : Paramètres > À propos du téléphone > Informations sur le logiciel > Tapotez 7 fois sur le Numéro de version
    2. Puis revenez en arrière et cliquez sur Options pour les développeurs > Débogage USB

    3. Connectez votre téléphone à votre ordinateur avec un cable USB
    4. Dans une fenêtre cmd (ou PowerShell) aller dans le dossier de votre projet
    5. Lancer la commande : `npm run android`

    Si cette dernière étape ne marche pas, installez *Expo Go* sur votre téléphone, sur votre cmd faites la commande : `npm start`, lancez l'application *Expo Go* sur téléphone et scannez le QR Code qui s'affiche sur votre écran






