// // import './bootstrap';
// // import '../css/app.css';

// // import { createRoot } from 'react-dom/client';
// // import { createInertiaApp } from '@inertiajs/react';
// // import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// // const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// // createInertiaApp({
// //     title: (title) => `${title} - ${appName}`,
// //     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
// //     setup({ el, App, props }) {
// //         const root = createRoot(el);

// //         root.render(<App {...props} />);
// //     },
// //     progress: {
// //         color: '#4B5563',
// //     },
// // });


// import './bootstrap';
// import '../css/app.css';

// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,

//     resolve: async (name) => {
//         try {
//             // 1️⃣ Try custom folders (Frontend / Admin)
//             return await import(`./${name}.jsx`);
//         } catch (e) {
//             try {   
//                 // 2️⃣ Fallback to default Laravel Pages
//                 return await import(`./Pages/${name}.jsx`);
//             } catch (err) {
//                 console.error("Page not found:", name);
//             }
//         }
//     },

//     setup({ el, App, props }) {
//         const root = createRoot(el);
//         root.render(<App {...props} />);
//     },

//     progress: {
//         color: '#4B5563',
//     },
// });

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// 👇 Vite-safe dynamic imports
const pages = import.meta.glob('./**/*.jsx');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: async (name) => {
        // 1️⃣ Try custom (Frontend / Admin)
        let path = `./${name}.jsx`;

        if (pages[path]) {
            return await pages[path]();
        }

        // 2️⃣ Fallback to default Laravel Pages
        path = `./Pages/${name}.jsx`;

        if (pages[path]) {
            return await pages[path]();
        }

        console.error("Page not found:", name);
    },

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});