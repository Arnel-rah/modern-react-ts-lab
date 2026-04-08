# 🧪 Parcours d'Apprentissage : React & TypeScript

Ce guide contient une série d'exercices progressifs pour maîtriser le développement de composants robustes, typés et réutilisables.

---

## 🟢 Niveau 1 : Les Fondamentaux (Props & Types)

### Exercice 1 : Le Composant Input Contrôlé

**Objectif :** Créer un champ de saisie réutilisable avec gestion d'état et d'erreurs.

- **Concepts :** `React.InputHTMLAttributes`, types Union, typage des événements (`React.ChangeEvent`).
- **À faire :**
  - Créer `Input.tsx` et `Input.styles.ts`.
  - Gérer les props : `label`, `error` (message rouge), et les props natives (`placeholder`, `type`).
  - Utiliser `clsx` pour changer la bordure en rouge si `error` est présent.

---

### Exercice 2 : Badge & Status (Enums vs Unions)

**Objectif :** Afficher des pastilles de couleur selon un statut.

- **Concepts :** Typage de variantes de couleurs.
- **À faire :**
  - Créer un composant `Badge`.
  - Variantes obligatoires : `success`, `warning`, `error`, `info`.
  - Ajouter une prop `dot` (booléen) pour afficher ou non un petit point devant le texte.

---

### Exercice 3 : Composant Avatar *(nouveau)*

**Objectif :** Afficher une image de profil ou des initiales en fallback.

- **Concepts :** Gestion des événements d'erreur, rendu conditionnel, union types pour les tailles.
- **À faire :**
  - Créer un composant `Avatar` avec les props : `src?`, `alt`, `name`, `size` (`sm | md | lg | xl`).
  - Si `src` est défini, afficher l'image. Si l'image échoue à charger (`onError`), basculer sur les initiales.
  - Générer les initiales depuis `name` (ex. `"John Doe"` → `"JD"`).
  - Implémenter un système de couleur de fond déterministe basé sur le nom.
  - Typer strictement les tailles avec un mapping `Record<Size, string>` pour les classes CSS.

```tsx
<Avatar src="/profile.jpg" name="John Doe" size="md" />
<Avatar name="Marie Curie" size="lg" />
```

---

### Exercice 4 : Composant Tooltip *(nouveau)*

**Objectif :** Afficher une info-bulle au survol avec positionnement configurable.

- **Concepts :** `useState`, `onMouseEnter/Leave`, union type pour la position, `useRef`.
- **À faire :**
  - Créer un composant `Tooltip` wrappant ses `children`.
  - Props : `content` (string), `position` (`top | bottom | left | right`), `delay?` (ms, défaut : 300).
  - Le tooltip apparaît après le délai et disparaît immédiatement au départ de la souris.
  - Gérer le cas où le tooltip sort de l'écran (bonus : inverser la position automatiquement).
  - Nettoyer le `setTimeout` dans le `useEffect` pour éviter les fuites mémoire.

```tsx
<Tooltip content="Supprimer l'élément" position="top">
  <Button variant="danger">Supprimer</Button>
</Tooltip>
```

---

## 🟡 Niveau 2 : Composition & Patterns (Intermédiaire)

### Exercice 5 : Compound Components (Card)

**Objectif :** Créer un système de carte flexible utilisant la composition.

- **Concepts :** `React.ReactNode`, Composition de composants (`Card.Header`, `Card.Body`).
- **À faire :**
  - Permettre l'usage suivant :

    ```tsx
    <Card>
      <Card.Header>Titre</Card.Header>
      <Card.Body>Contenu</Card.Body>
      <Card.Footer>Actions</Card.Footer>
    </Card>
    ```

  - Typage strict du `children`.

---

### Exercice 6 : Custom Hook `useToggle`

**Objectif :** Créer un hook pour gérer les états logiques (modales, menus).

- **Concepts :** Hooks personnalisés, Tuple return types.
- **À faire :**
  - Le hook doit retourner `[value, toggle, setTrue, setFalse]`.
  - Utiliser ce hook pour afficher/masquer une section de texte.

---

### Exercice 7 : Hook `useLocalStorage` *(nouveau)*

**Objectif :** Synchroniser un état React avec le `localStorage` de manière typée et sécurisée.

- **Concepts :** Generics, `useEffect`, `try/catch`, sérialisation JSON.
- **À faire :**
  - Créer `useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]`.
  - Lire la valeur initiale depuis le `localStorage` si elle existe, sinon utiliser `initialValue`.
  - Sérialiser avec `JSON.stringify` à l'écriture, désérialiser avec `JSON.parse` à la lecture.
  - Entourer les opérations d'un `try/catch` : si le parsing échoue, retourner `initialValue`.
  - Synchroniser entre onglets via l'événement `storage` (bonus).

```tsx
const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
const [user, setUser] = useLocalStorage<User | null>('user', null);
```

---

### Exercice 8 : Composant Modal *(nouveau)*

**Objectif :** Créer une fenêtre modale accessible, rendue hors de l'arbre DOM principal.

- **Concepts :** `createPortal`, `useEffect`, gestion du focus, attributs ARIA.
- **À faire :**
  - Utiliser `ReactDOM.createPortal` pour rendre la modale dans `document.body`.
  - Fermer la modale avec la touche `Echap` (listener sur `keydown`).
  - Fermer en cliquant sur le backdrop, mais pas sur le contenu de la modale.
  - Bloquer le scroll du body quand la modale est ouverte (`overflow: hidden`).
  - Ajouter les attributs d'accessibilité : `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
  - Nettoyer tous les side effects dans le `return` du `useEffect`.

```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmation">
  <p>Voulez-vous vraiment supprimer cet élément ?</p>
  <Button onClick={() => setIsOpen(false)}>Annuler</Button>
</Modal>
```

---

### Exercice 9 : Système de Tabs (Context API) *(nouveau)*

**Objectif :** Créer un système d'onglets avec partage d'état via le Context.

- **Concepts :** `createContext`, `useContext`, pattern Compound Components + Context.
- **À faire :**
  - Créer un `TabsContext` pour partager l'onglet actif entre les sous-composants.
  - Implémenter `Tabs`, `Tabs.List`, `Tabs.Tab` et `Tabs.Panel`.
  - `Tabs.Tab` reçoit une prop `value` et se marque comme actif si elle correspond au contexte.
  - `Tabs.Panel` reçoit une prop `value` et n'est rendu que si elle correspond à l'onglet actif.
  - Lancer une erreur explicite si `Tabs.Tab` ou `Tabs.Panel` est utilisé en dehors de `<Tabs>`.

```tsx
<Tabs defaultValue="profile">
  <Tabs.List>
    <Tabs.Tab value="profile">Profil</Tabs.Tab>
    <Tabs.Tab value="settings">Paramètres</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="profile"><ProfileForm /></Tabs.Panel>
  <Tabs.Panel value="settings"><SettingsForm /></Tabs.Panel>
</Tabs>
```

---

## 🟠 Niveau 3 : Abstraction & Génériques (Avancé)

### Exercice 10 : La Liste Générique (`DataList`)

**Objectif :** Créer un composant de liste capable d'afficher n'importe quel type de donnée.

- **Concepts :** **Generics `<T>`** en TypeScript.
- **À faire :**
  - Le composant reçoit un tableau `items: T[]` et une fonction `renderItem: (item: T) => ReactNode`.
  - Tester le composant avec une liste d'utilisateurs, puis une liste de produits.

---

### Exercice 11 : Composant Polymorphe (Le bouton "as")

**Objectif :** Permettre à ton bouton de devenir un lien `<a>` tout en gardant ses styles.

- **Concepts :** `React.ElementType`, Polymorphisme avancé.
- **À faire :**
  - Ajouter une prop `as` au composant `Button`.
  - Si `as="a"`, le composant doit accepter les props `href`. Si `as="button"`, il accepte `type="submit"`.

---

### Exercice 12 : Hook `useFetch` Générique *(nouveau)*

**Objectif :** Créer un hook de fetching typé, avec gestion des états et annulation des requêtes.

- **Concepts :** Generics, `AbortController`, discriminated union pour les états, `useCallback`.
- **À faire :**
  - Créer `useFetch<T>(url: string)` retournant un état discriminé :

    ```ts
    type FetchState<T> =
      | { status: 'idle' }
      | { status: 'loading' }
      | { status: 'success'; data: T }
      | { status: 'error'; message: string };
    ```

  - Créer un `AbortController` dans le `useEffect` et appeler `controller.abort()` dans le cleanup.
  - Ignorer les erreurs d'annulation (`AbortError`) pour éviter les faux positifs.
  - Ajouter une fonction `refetch` (via `useCallback`) pour relancer manuellement la requête.
  - Bonus : ajouter un paramètre `options` pour passer des headers (ex. token d'auth).

```tsx
const { status, data, message, refetch } = useFetch<User[]>('/api/users');
```

---

### Exercice 13 : Table de Données Triable *(nouveau)*

**Objectif :** Créer un composant `Table<T>` générique avec tri, configuration des colonnes et pagination.

- **Concepts :** `generics`, `keyof T`, `useMemo`, `useCallback`, types conditionnels.
- **À faire :**
  - Définir un type `Column<T>` :

    ```ts
    type Column<T> = {
      key: keyof T;
      header: string;
      sortable?: boolean;
      render?: (value: T[keyof T], row: T) => ReactNode;
    };
    ```

  - Le composant reçoit `data: T[]`, `columns: Column<T>[]`, `pageSize?: number`.
  - Implémenter le tri par colonne (clic sur l'en-tête, asc/desc, réinitialisation au 3e clic).
  - Utiliser `useMemo` pour calculer les données triées et paginées.
  - Ajouter les contrôles de pagination (page précédente, suivante, indicateur de page).
  - Tester avec une liste d'utilisateurs, puis une liste de commandes aux types différents.

```tsx
<Table
  data={users}
  columns={[
    { key: 'name', header: 'Nom', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Rôle', render: (v) => <Badge>{v}</Badge> },
  ]}
  pageSize={10}
/>
```

---

### Exercice 14 : Formulaire avec `useReducer` *(nouveau)*

**Objectif :** Gérer un formulaire multi-champs complexe avec un reducer typé et des actions discriminées.

- **Concepts :** `useReducer`, discriminated union actions, validation, types utilitaires TypeScript.
- **À faire :**
  - Définir l'état et les actions sous forme de discriminated unions :

    ```ts
    type FormAction =
      | { type: 'SET_FIELD'; field: keyof FormValues; value: string }
      | { type: 'SET_ERROR'; field: keyof FormValues; error: string }
      | { type: 'CLEAR_ERRORS' }
      | { type: 'RESET' }
      | { type: 'SUBMIT_START' }
      | { type: 'SUBMIT_SUCCESS' }
      | { type: 'SUBMIT_FAILURE'; error: string };
    ```

  - Implémenter la validation dans le reducer ou via des fonctions pures.
  - Champs à gérer : `name`, `email`, `password`, `confirmPassword`.
  - Valider que `password === confirmPassword` avant la soumission.
  - Gérer l'état `isSubmitting` pour désactiver le bouton pendant l'envoi.
  - Extraire le reducer dans un fichier séparé `formReducer.ts` pour faciliter les tests unitaires.

---

## 🔴 Niveau 4 : Real-world Challenges

### Projet 1 : Mini Dashboard "User Management"

**Objectif :** Combiner tous les éléments précédents.

- **Contraintes :**
  - Récupérer des données (mockées ou via une API comme JSONPlaceholder).
  - Utiliser la `DataList` générique pour afficher les utilisateurs.
  - Utiliser tes `Input` et `Button` pour créer un formulaire d'ajout d'utilisateur.
  - Gérer les états de chargement (`isLoading`) sur les boutons.

---

### Projet 2 : Kanban Board *(nouveau)*

**Objectif :** Créer un tableau Kanban interactif avec drag & drop et persistance locale.

- **Contraintes :**
  - Colonnes configurable : `Todo`, `In Progress`, `Done` (et possibilité d'en ajouter).
  - Implémenter le drag & drop entre colonnes (HTML5 Drag API ou librairie légère).
  - Gérer l'état global du board avec `useReducer` et des actions typées.
  - Persister l'état via `useLocalStorage` pour retrouver son board après rechargement.
  - Ajouter, éditer et supprimer des cartes via une `Modal`.
  - Chaque carte possède : `id`, `title`, `description?`, `priority` (`low | medium | high`), `assignee?`.
  - Afficher un `Badge` de priorité coloré sur chaque carte.
  - **Bonus :** Filtrer les cartes par priorité ou par assignee avec un `Input` de recherche.

---

### Projet 3 : Design System Showcase *(nouveau)*

**Objectif :** Créer une page de documentation interactive listant tous tes composants.

- **Contraintes :**
  - Pour chaque composant, afficher : nom, description, exemples live et liste des props.
  - Permettre de modifier les props en live (ex. changer la variante d'un `Badge` via des boutons).
  - Afficher le code JSX correspondant à l'état courant (en lecture seule, dans un bloc stylé).
  - Utiliser le système de `Tabs` de l'exercice 9 pour séparer "Aperçu" et "Code".
  - Naviguer entre les composants via une sidebar avec recherche (`Input`).
  - Rendre la page entièrement accessible au clavier.
  - **Bonus :** Ajouter un toggle Dark/Light mode en haut à droite, persisté avec `useLocalStorage`.

---

## 📋 Récapitulatif des Concepts

| Exercice | Concepts clés |
|---|---|
| 1 - Input | `InputHTMLAttributes`, `ChangeEvent`, `clsx` |
| 2 - Badge | Union types, variantes |
| 3 - Avatar | Fallback, `onError`, `Record<K,V>` |
| 4 - Tooltip | `useRef`, `setTimeout`, cleanup |
| 5 - Card | Composition, `ReactNode` |
| 6 - useToggle | Custom hook, tuple return |
| 7 - useLocalStorage | Generics, JSON, `try/catch` |
| 8 - Modal | `createPortal`, ARIA, keyboard |
| 9 - Tabs | `createContext`, `useContext` |
| 10 - DataList | Generics `<T>`, `renderItem` |
| 11 - Button polymorphe | `ElementType`, polymorphisme |
| 12 - useFetch | Generics, `AbortController`, discriminated union |
| 13 - Table triable | `keyof T`, `useMemo`, pagination |
| 14 - Formulaire useReducer | `useReducer`, actions discriminées, validation |
| Projet 1 - Dashboard | Composition complète |
| Projet 2 - Kanban | Drag & drop, persistence |
| Projet 3 - Design System | Documentation, live preview |
