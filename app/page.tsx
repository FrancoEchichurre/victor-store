"use client"

import dynamic from 'next/dynamic'

const HomeContent = dynamic(() => import('@/components/home').then(mod => ({ default: mod.HomeContent })), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Cargando...</div>
})

export default function HomePage() {
  return <HomeContent />
}