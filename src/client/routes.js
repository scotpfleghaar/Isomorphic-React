import React from 'react';
import Home from './components/app';
import UsersList, { loadData } from './components/users-list';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
]