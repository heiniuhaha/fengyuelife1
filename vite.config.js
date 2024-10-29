import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果需要，可以添加其他配置
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
