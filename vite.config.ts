// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// })

// vite.config.ts
import path from 'path';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import libCss from 'vite-plugin-libcss';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// function resolve(str: string) {
//     return path.resolve(__dirname, str);
// }

export default defineConfig({
    plugins: [
        react(),
        typescript({
            target: 'es5',
            rootDir: resolve('src/'),
            declaration: true,
            declarationDir: resolve('lib'),
            exclude: resolve('node_modules/**'),
            allowSyntheticDefaultImports: true,
        }),
        libCss(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        // 打包输出的目录
        outDir: 'lib',
        // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
        cssTarget: 'chrome61',
        lib: {
            // 组件库源码的入口文件
            entry: resolve('src/main.tsx'),
            // 组件库名称
            name: 'LanUI',
            // 输出文件名的前缀, 打包结果举例: my-packages.umd.cjs
            fileName: 'LANUI',
            formats: ['es', 'umd', 'iife'], // 导出模块类型
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['react', 'react-dom'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'react',
                    'react-dom': 'react-dom',
                },
            },
            plugins: [
                typescript({
                    target: 'es2015', // 这里指定编译到的版本，
                    rootDir: resolve('src/'),
                    declaration: true,
                    declarationDir: resolve('lib'),
                    exclude: resolve('node_modules/**'),
                    allowSyntheticDefaultImports: true,
                }),
            ],
        },
        cssCodeSplit: true, // 是否单独输出css
        minify: 'terser',
        sourcemap: true, // 输出单独source文件,可以进行断点调试
    },
});
