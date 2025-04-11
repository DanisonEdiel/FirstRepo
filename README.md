# 🌟 First Practice

This project is built with [Vue 3](https://vuejs.org/) and [Vuetify](https://next.vuetifyjs.com/), designed to offer a modern, accessible, and fully responsive user interface.

## 📦 Main Technologies

- ⚙️ [Vue 3](https://vuejs.org/) (Composition API)
- 🎨 [Vuetify 3](https://next.vuetifyjs.com/) (Material Design Framework)
- 🛠️ Vite / Webpack

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/DanisonEdiel/practice1.git
cd practice1

# Install dependencies
npm install
```

## 🧪 Available Scripts

```bash
# Run the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint the code (if configured)
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/          
├── components/      
├── composables/     
├── layouts/         
├── pages/           
├── plugins/         
├── router/          
├── store/           
├── App.vue          
└── main.ts          
```

## ✨ Features

- ⚡ Fast and modular rendering with Vite
- 📱 Fully responsive design
- 📡 API consumption using Axios or Vue Query



## 📬 Contact

Made with ❤️ by [Edison Llano (DanisonEdiel)](https://github.com/DanisonEdiel).

- 🌐 LinkedIn: [Edison Llano](https://www.linkedin.com/in/edison-daniel-llano-tapia-3859aa260/)
- 📧 Email: edllanot@uce.edu.ec or edi282000@gmail.com
- 🐙 GitHub: [DanisonEdiel](https://github.com/DanisonEdiel)

## 🚀 Deployment with GitHub Actions and Vercel

This project is configured to automatically deploy to Vercel using GitHub Actions whenever changes are pushed to the main branch.

### Prerequisites

Before you can use the automatic deployment, you need to set up the following secrets in your GitHub repository:

1. `VERCEL_TOKEN`: Your Vercel API token
2. `VERCEL_ORG_ID`: Your Vercel organization ID
3. `VERCEL_PROJECT_ID`: Your Vercel project ID

### How to get Vercel credentials

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel login` and follow the instructions
3. Run `vercel link` in your project directory to link it to a Vercel project
4. Get your tokens by running `vercel project list` and `vercel whoami`

### Workflow

The GitHub Actions workflow will:
1. Check out your code
2. Set up Node.js
3. Install dependencies
4. Run type checking
5. Build the project
6. Deploy to Vercel

You can find the workflow configuration in `.github/workflows/vercel-deploy.yml`.
