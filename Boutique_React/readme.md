# TP 5

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://intranet.fil.univ-lille.fr/2020/04/09/nodejs-et-npm/).  
  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Expliquez ici comment exécuter votre projet. Vous pouvez également ajouter toute précision utile sur votre travail.
## AUTEUR:SEGHIR ANES 

## execution du projet:
* on ouvre le tp5 dans le shell ensuite on exécute la commande npm install pour télecharger le dossier nodes
* on execute ensuite la commande npm run build pour avoir le dossier dist 
* finalement on ourve le fichier index.html du dossier dist ou bien on execute directement la commande npm run dev-server






## classe app:


* addProduitsToCart (addProduitsToCart(product, productId)) : Cette méthode est utilisée pour ajouter un produit au panier. Elle met à jour l'état en ajoutant le produit sélectionné au tableau selectProduis et en mettant à jour les quantités disponibles dans les tableaux quantite et quantite1. Elle ajuste également le stock du produit en réduisant de 1. Si le produit est déjà présent dans le panier, il met simplement à jour la quantité.

* removeFromCart (removeFromCart(productId)) : Cette méthode permet de supprimer un produit du panier. Elle met à jour l'état en supprimant le produit du tableau selectProduis et en mettant à jour les quantités disponibles dans les tableaux quantite et quantite1. Si le produit supprimé est celui qui a une quantité spécifique dans quantite, la méthode réinitialise cette quantité à 1 et met à jour la valeur de v avec le stock du produit.

* updateStock (updateStock(product, quantite)) : Cette méthode est utilisée pour mettre à jour les stocks des produits dans le panier. Elle met à jour l'état en modifiant les quantités disponibles dans les tableaux quantite1 et quantite. Elle calcule également la nouvelle valeur de v en soustrayant la quantité spécifiée de la valeur actuelle de v.

* setV (setV(v)) : Cette méthode met à jour la valeur de v dans l'état de la classe.

* setId (setId(id)) : Cette méthode met à jour la valeur de id dans l'état de la classe.

* render : Cette méthode est responsable du rendu du composant App. Elle retourne les éléments JSX qui représentent les composants Produits et Panier avec les données et les fonctions appropriées passées en tant que props.



## classe panier :

* ChangeStock(event, product) : Cette fonction est appelée lorsque l'utilisateur modifie la quantité d'un produit dans le panier. Elle met à jour l'état du composant en ajoutant la quantité choisie pour le produit spécifié. Ensuite, elle appelle les fonctions handleUpdateStock et PriceAndWeight pour mettre à jour le stock et recalculer les prix et les poids.

* handleUpdateStock(product, quantite) : Cette fonction met à jour l'état du composant en ajoutant la quantité choisie pour le produit spécifié. Elle utilise setState pour mettre à jour la clé quantite de l'état avec la nouvelle quantité.

* PriceAndWeight(prevProps) : Cette fonction calcule les prix totaux et les poids totaux des produits dans le panier. Elle est appelée lorsque les produits sélectionnés (selectProduis) changent. Elle parcourt chaque produit sélectionné, récupère la quantité correspondante à partir de l'état, multiplie la quantité par le prix et le poids du produit, puis ajoute ces valeurs aux variables newPrice et newWeight. Ensuite, elle met à jour l'état avec les nouvelles valeurs de prix et de poids.

* componentDidUpdate(prevProps) : Cette méthode est appelée après que le composant a été mis à jour suite à un changement de props ou d'état. Dans ce cas, elle appelle la fonction PriceAndWeight en lui passant les prevProps pour recalculer les prix et les poids si les produits sélectionnés ont changé.

* render() : Cette méthode est responsable du rendu du composant. Elle affiche le contenu du panier avec les produits, leurs informations, les images, les quantités et les boutons de suppression. Elle utilise les données passées en props (selectProduis) pour afficher les produits du panier.

## classe produit:


* filtreproduits(event) : Cette fonction est appelée lorsque l'utilisateur saisit du texte dans le champ de filtrage des produits. Elle met à jour l'état du composant avec la valeur saisie dans le champ de filtrage. Cela permet de filtrer les produits affichés en fonction du nom du produit qui commence par le texte filtré.

* render() : Cette méthode est responsable du rendu du composant. Elle affiche la liste des produits avec leurs informations, leurs images, les quantités disponibles et les boutons d'ajout au panier. Elle utilise les données des produits (products) pour afficher les produits.






