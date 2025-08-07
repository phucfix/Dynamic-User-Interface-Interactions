# 🔧 Vanilla Webpack Template

A minimal, modern Webpack 5 setup for vanilla JavaScript projects — includes basic configuration for bundling JS, CSS, images, and HTML.
I also adding a linter (ESLint) and a formatter (Prettier). To use this just using these commands:

- Run ESLint on any file or directory like this:

```
npx eslint yourfile.js 
```

- format all files with Prettier:

```
npx prettier . --write
```

If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

```
npx prettier . --check
```
