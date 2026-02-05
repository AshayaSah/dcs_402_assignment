'use client'

import { ApologyPage } from '@/components/AppologyPage'
import { HowDarePage } from '@/components/HowDarePage'
import { SelectionPage } from '@/components/SelectionPage'
import { ThankYouPage } from '@/components/ThankYouPage'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// const ApologyPage = dynamic(() => import('@/components/AppologyPage').then(mod => ({ default: mod.ApologyPage })), { ssr: false })
// const HowDarePage = dynamic(() => import('@/components/HowDarePage').then(mod => ({ default: mod.HowDarePage })), { ssr: false })
// const SelectionPage = dynamic(() => import('@/components/SelectionPage').then(mod => ({ default: mod.SelectionPage })), { ssr: false })
// const ThankYouPage = dynamic(() => import('@/components/ThankYouPage').then(mod => ({ default: mod.ThankYouPage })), { ssr: false })


export default function Page() {
  const [currentPage, setCurrentPage] = useState('selection')

  const handleYes = () => setCurrentPage('yes')
  const handleNo = () => setCurrentPage('no')
  const handleBack = () => setCurrentPage('selection')
  const handleForgive = () => setCurrentPage('thankyou')

  return (
    <main className="min-h-screen w-full">
      {currentPage === 'selection' && <SelectionPage onYes={handleYes} onNo={handleNo} />}
      {currentPage === 'no' && <HowDarePage onBack={handleBack} />}
      {currentPage === 'yes' && <ApologyPage onBack={handleBack} handleForgive={handleForgive} />}
      {currentPage === 'thankyou' && <ThankYouPage onBack={handleBack} />}
    </main>
  )
}
