import { useRoutes } from 'react-router-dom'

// Pages and Components
import { Home } from '../pages/Home'
import { Album } from '../pages/Album'
import { Photo } from '../pages/Photo'
import { NotFound } from '../pages/NotFound'

export const MainRoutes = () => {

    return useRoutes([
        {path:'/', element: <Home/>},
        {path:'/albums/:id', element: <Album/>},
        {path:'/photos/:id', element: <Photo/>},
        {path:'*', element: <NotFound/>},
    ])
}