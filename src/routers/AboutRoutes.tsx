import { lazy, Suspense } from 'react'

const About = lazy(() => import('@/pages/About'))
const AboutInfo = lazy(() => import('@/pages/AboutInfo'))

export const AboutRoutes = {
  path: 'about',
  children: [
    {
      path: '',
      element: (
        <Suspense fallback={<div>Carregando...</div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: 'info',
      element: (
        <Suspense fallback={<div>Carregando...</div>}>
          <AboutInfo />
        </Suspense>
      ),
    },
  ],
}
