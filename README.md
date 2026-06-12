# Giraud Orthopédie — site vitrine

Site statique (HTML/CSS, sans build) pour le cabinet de **Pierre-Emmanuel Giraud**,
orthopédiste-orthésiste-podologue à Paris 5ᵉ. Mise en avant de l'activité **course à pied
& triathlon**. Design « éditorial clinique », sobre et optimisé pour l'**accessibilité (WCAG 2.1 AA)**.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil — présentation, prestations, focus sport, parcours de soin |
| `praticien.html` | Le praticien, l'approche sur-mesure, le métier |
| `prestations.html` | Détail des prestations (semelles, hallux valgus, orthoplasties, main/poignet, réflexologie) |
| `sport.html` | **Course à pied & triathlon** — bilan, pathologies (accordéon), triathlon, pluridisciplinarité, prévention, sources |
| `infos-pratiques.html` | Accès, horaires, tarifs indicatifs, première visite |
| `mentions-legales.html` | Mentions légales, RGPD, crédits photos & typographies |
| `404.html` | Page d'erreur |

## Pile technique

- HTML sémantique + CSS unique (`assets/css/style.css`), **aucune dépendance, aucun build**.
- JavaScript minimal (`assets/js/main.js`) pour le menu mobile — le site reste utilisable sans JS.
- Polices **Fraunces** et **Inter** (SIL OFL) **auto-hébergées** (`assets/fonts/`) — aucun appel à Google Fonts (conforme RGPD / recommandation CNIL).
- Images libres de droits (Wikimedia Commons, CC-BY / CC-BY-SA) dans `assets/img/`, créditées dans les mentions légales.

## Aperçu en local

Servez le dossier avec n'importe quel serveur statique, par exemple :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement (GitHub Pages)

Le site est publié via **GitHub Pages** depuis la branche `main` (dossier racine).
Le fichier `.nojekyll` désactive le traitement Jekyll. Les chemins sont **relatifs** :
le site fonctionne aussi bien à la racine d'un domaine que dans un sous-dossier `…github.io/<repo>/`.

### Passer le site en public (indexable)

Tant que le contenu n'est pas validé, le site est **volontairement non indexé**. Pour le rendre public :

1. Supprimer la ligne `<meta name="robots" content="noindex, nofollow">` dans **chaque** fichier `.html`.
2. Dans `robots.txt`, remplacer le bloc `Disallow: /` par le bloc « EN LIGNE » (commenté en bas du fichier).
3. Vérifier l'URL de base dans `sitemap.xml`.

### Domaine personnalisé (`giraud-orthopedie.fr`)

1. Créer un fichier `CNAME` à la racine contenant `www.giraud-orthopedie.fr`.
2. Chez le registrar du domaine, créer un enregistrement `CNAME` `www` → `nyamor-13.github.io`
   (et, pour le domaine nu, les 4 enregistrements `A` de GitHub Pages).
3. Activer « Enforce HTTPS » dans les réglages Pages du dépôt.

## À personnaliser / à vérifier avant publication

Ces éléments ont été **repris de sources publiques** (site actuel, Doctolib, annuaires) ou laissés
en attente — **à confirmer par le praticien** :

- [ ] **Horaires exacts** — affichés « sur rendez-vous, du lundi au samedi » + renvoi Doctolib. À préciser si besoin.
- [ ] **Tarifs** (`infos-pratiques.html`) — montants *indicatifs* repris d'annuaires. À confirmer/mettre à jour.
- [ ] **Mentions légales** — renseigner SIRET, n° ADELI/RPPS, assurance RCP, éditeur (champs `[à compléter]`).
- [ ] **Biographie** (`praticien.html`) — ajouter parcours, diplômes, année d'installation, éventuel parcours sportif (voir commentaire `PERSONNALISER`).
- [ ] **Photos réelles** — remplacer / compléter les images libres par des photos du cabinet, de l'atelier, du praticien et de ses réalisations (semelles, orthèses). Emplacements repérés par des commentaires `PERSONNALISER`.
- [ ] **Réseaux sociaux** — vérifier le handle Instagram exact (`giraud_orthopedie_paris`) et l'URL Facebook.
- [ ] **Contenu médical** (`sport.html`) — relu pour rester prudent et grand public ; à faire valider par le praticien.

## Accessibilité

Contrastes AA, navigation clavier, focus visibles, lien d'évitement, repères ARIA, respect de
`prefers-reduced-motion`, cibles tactiles confortables, menu mobile accessible (`aria-expanded`).

## Crédits

- Typographies : Fraunces (Undercase Type Foundry) & Inter (Rasmus Andersson) — SIL OFL.
- Photographies : Wikimedia Commons (CC-BY / CC-BY-SA) — détail dans `mentions-legales.html`.
