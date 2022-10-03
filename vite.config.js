import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias:{
    '@' : path.resolve(__dirname, './src')
  },
  plugins: [vue()],
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Web-Development/" : "/",
};
