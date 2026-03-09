import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

// vitejs.dev
export default defineConfig({
  plugins: [tailwindcss(), react()], // Add tailwindcss to the plugins array
});