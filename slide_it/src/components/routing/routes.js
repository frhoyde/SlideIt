import { lazy } from 'react';

const routes = [
    {
        path: '/dashboard',
        component: lazy(() => import('../Dashboard/dashboard')),
        
        exact: true
    }
];

export default routes;
