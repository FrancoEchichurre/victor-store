import dynamic from 'next/dynamic'

const HomeContent = dynamic(() => import('@/components/home-content').then(mod => ({ default: mod.HomeContent })), {
  ssr: false
})

export default function HomePage() {
  return <HomeContent />
}