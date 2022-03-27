import { lazy } from 'react';

const routes = [
    {
        path: 'home',
        component: lazy(() => import('components/Home')),
        exact: true
    },
    {
        path: 'users',
        component: lazy(() => import('components/Users')),
        exact: true
    }
];

export default routes;
