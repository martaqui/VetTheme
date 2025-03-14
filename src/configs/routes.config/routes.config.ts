import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/especialistas',
        component: lazy(() => import('@/views/demo/Especialistas')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/ventas-historico-anual',
        component: lazy(() => import('@/views/demo/VentasHistoricoAnual')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/ventas-ultimos-dos-meses',
        component: lazy(() => import('@/views/demo/VentasUltimosDosMeses')),
        authority: [],
    },
    {
        key: 'collapseMenu.item3',
        path: '/ventas-por-cliente',
        component: lazy(() => import('@/views/demo/VentasPorCliente')),
        authority: [],
    },
    {
        key: 'collapseMenu.item3',
        path: '/casos-historico-anual',
        component: lazy(() => import('@/views/demo/CasosHistoricoAnual')),
        authority: [],
    },
    {
        key: 'collapseMenu.item4',
        path: '/tipos-de-caso',
        component: lazy(() => import('@/views/demo/TiposDeCaso')),
        authority: [],
    },
    {
        key: 'collapseMenu.item5',
        path: '/casos-ultimos-dos-meses',
        component: lazy(() => import('@/views/demo/CasosUltimosDosMeses')),
        authority: [],
    },
    {
        key: 'collapseMenu.item6', // Puedes poner cualquier clave única
        path: '/ventas-historicas-mesanio', // Esta es la URL a la que navegarás
        component: lazy(() => import('@/views/demo/VentasHistoricasMesAnio')), // Importa tu componente
        authority: [],
    },
    {
        key: 'collapseMenu.item6', // Puedes poner cualquier clave única
        path: '/casos_historico_anual_mes_anio', // Esta es la URL a la que navegarás
        component: lazy(
            () => import('@/views/demo/CasosHistoricoAnualMesAnio'),
        ), // Importa tu componente
        authority: [],
    },
    {
        key: 'collapseMenu.item7',
        path: '/ventas_por_cliente_en_concreto/:client/:cif',
        component: lazy(() => import('@/views/demo/GraficoPorCliente')),
        authority: [],
    },
    {
        key: 'collapseMenu.item8',
        path: '/ventas-por-cliente-desglosado',
        component: lazy(
            () => import('@/views/demo/VentasPorClienteDesglosado'),
        ),
        authority: [],
    },
    {
        key: 'collapseMenu.item8',
        path: '/costes',
        component: lazy(() => import('@/views/demo/Costes')),
        authority: [],
    },
    {
        key: 'collapseMenu.item8',
        path: '/margen',
        component: lazy(() => import('@/views/demo/Margen')),
        authority: [],
    },

    ...othersRoute,
]
