import React from 'react';
import { Navigate } from 'react-router-dom';

/* Layouts */
import BaseLayout from './layouts/BaseLayout';

/* Pages */
import Home from './content/pages/Home/Home';
import Other from './content/pages/Other/Other';
import { Blog } from './content/pages/Blog/Blog';
import { About } from './content/pages/About/About';

/*
  Statuses:
  DONE:404
  DONE:ComingSoon
  TODO:500
  TODO:Maintenance
*/
import Status404 from './content/pages/Status/Status404';
import StatusComingSoon from './content/pages/Status/StatusComingSoon';

// Routes
const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      //   {
      //     path: '',
      //     element: <Navigate to="welcome" replace />
      //   },
      //   {
      //     path: 'welcome',
      //     element: <Welcome />
      //   },
      // Statuses
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to='404' replace />
          },
          {
            path: '404',
            element: <Status404 />
          }
          // {
          //   path: '500',
          //   element: <Status500 />
          // },
          // {
          //   path: 'maintenance',
          //   element: <StatusMaintenance />
          // },
          // {
          //   path: 'coming-soon',
          //   element: <StatusComingSoon />
          // }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      },
      {
        path: 'coming-soon',
        element: <StatusComingSoon />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: '/other',
        element: <Other />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
];

export default routes;
