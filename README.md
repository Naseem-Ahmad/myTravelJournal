1. Make sure Vite is installed in your project

In your project folder, run:

npm install vite --save-dev


For React projects, also install the React plugin:

npm install @vitejs/plugin-react --save-dev

2. Verify your package.json scripts

Make sure you have this:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}


The dev command runs vite.

This will use the local version of Vite installed in node_modules.

3. Run the dev server via npm

Instead of typing vite directly in the terminal, run:

npm run dev


✅ This will use the locally installed Vite binary, which avoids the 'vite' is not recognized error.