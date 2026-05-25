# GitHub Pages Deployment

## .gitignore

```gitignore
node_modules/
build/
```

- `node_modules/` prevents installed packages from being tracked by git.
- `build/` prevents generated production files from being tracked in the `main` branch.

---

## Install Dependencies

```bash
npm install
```

- Installs all required project dependencies from `package.json`.

---

## Build Website

```bash
npm run build
```

- Creates an optimized production build inside the `build/` folder.

---

## Switch to Deployment Branch

```bash
git switch gh-pages
```

- Switches from the `main` branch to the `gh-pages` deployment branch.

---

## Check Current Branch

```bash
git branch
```

- Shows all branches and highlights the currently active branch.

---

## List Current Files

```bash
ls
```

- Displays files currently present in the `gh-pages` branch.

---

## Move Build Files to Root

```bash
mv build/* .
```

- Moves all generated website files from the `build/` folder to the root of the `gh-pages` branch.

---

## Remove Empty Build Folder

```bash
rm -rf build
```

- Deletes the now-empty `build/` folder.

---

## Remove node_modules

```bash
rm -rf node_modules
```

- Removes local dependency files from the deployment branch.

---

## Verify Final Files

```bash
ls
```

- Confirms that deployment files like `index.html` and `static/` are present in the root directory.

---

## Stage Deployment Files

```bash
git add .
```

- Adds all updated deployment files to git staging.

---

## Commit Deployment

```bash
git commit -m "Deploy website"
```

- Creates a git commit containing the latest website deployment.

---

## Push gh-pages Branch

```bash
git push origin gh-pages
```

- Uploads the updated `gh-pages` branch to GitHub for website hosting.