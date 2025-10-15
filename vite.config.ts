import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					ui: ['@nextui-org/react'],
					animations: ['framer-motion'],
					icons: ['@iconify/react'],
					routing: ['react-router-dom'],
					state: ['@reduxjs/toolkit', 'react-redux', 'redux-persist'],
					forms: ['react-hook-form', '@hookform/resolvers', 'formik'],
					utils: ['axios', 'react-query', 'zod']
				}
			}
		},
		chunkSizeWarningLimit: 1000,
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	optimizeDeps: {
		include: ['react', 'react-dom', '@nextui-org/react', 'framer-motion']
	}
});
