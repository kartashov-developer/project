import { Navigate } from 'react-router-dom'

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
