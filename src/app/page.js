'use client'

import { ApologyPage } from '@/components/AppologyPage'
import { HowDarePage } from '@/components/HowDarePage'
import RoseDayLetter from '@/components/RoseDay'
import { SelectionPage } from '@/components/SelectionPage'
import { ThankYouPage } from '@/components/ThankYouPage'
import { useState } from 'react'

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

      {/* {currentPage === 'yes' && <ApologyPage onBack={handleBack} handleForgive={handleForgive} />} */}

      {currentPage === 'yes' && <RoseDayLetter onBack={handleBack} />}
      {currentPage === 'thankyou' && <ThankYouPage onBack={handleBack} />}
    </main>
  )
}
