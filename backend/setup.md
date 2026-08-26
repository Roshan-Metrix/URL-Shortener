## Express + Typescript Setup
> Create Backend folder
```
mkdir backend
```
> Change directory to /backend
```
cd backend
```
> Intialize the backend
```
pnpm init
```
> Install Expressjs
```
pnpm add express
```
> Install typescript
```
pnpm add -D typescript @types/node @types/express tsx
```
> Install nodemon 
```
pnpm add nodemon
```
> Create the src/index.ts file (server) 
<br/>[Click me](./src/index.ts)

> Configure package.json file (replace "scripts")
```
"scripts": {
    "dev": "nodemon --exec tsx src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
```
> Run the project
```
pnpm dev
```
> Visit http://localhost:5000

Note: The project is successfully started listening on PORT 5000.