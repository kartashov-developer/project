import React from 'react'
import { Navigate } from 'react-router-dom'
// Layouts
import BaseLayout from './Layouts/BaseLayout'

const routes = [
  {
    path: '',
    element: <BaseLayout />,
    // children: [
    //   {
    //     path: '',
    //     element: <Navigate to="welcome" replace />
    //   },
    //   {
    //     path: 'welcome',
    //     element: <Welcome />
    //   },
    // ]
  },
]

export default routes
