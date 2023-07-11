import React from 'react'
import { Navigate } from 'react-router-dom'
import BaseLayout from './Layouts/BaseLayout'

// Layouts

const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
        {
            path: '/',
            element: <Overview />
        },
        {
            path: 'overview',
            element: <Navigate to='/' replace />
        },
    ]
  },
]

export default routes
