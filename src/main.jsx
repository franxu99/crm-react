import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import NuevoCliente, {action as actionNuevoCliente} from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import {action as eliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path:'/',       //Página Principal
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,   //Carga todos los clientes que hay almacenados en el db.json mediante el index
        errorElement: <ErrorPage />   //Cuando hay un error aparece en la pagina este componente
      },
      {
        path: '/clientes/nuevo',    //Página donde tenemos el formulario para introducir clientes
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
        router = {router}
    />
  </React.StrictMode>,
)
