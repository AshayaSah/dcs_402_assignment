'use client'

import { ApologyPage } from '@/components/AppologyPage'
import { HowDarePage } from '@/components/HowDarePage'
import ProposeDay from '@/components/ProposeDay'
import { RevealPage } from '@/components/RevealPage'
import RoseDayLetter from '@/components/RoseDay'
import { SelectionPage } from '@/components/SelectionPage'
import { ThankYouPage } from '@/components/ThankYouPage'
import { ProposeDaySelectionPage } from '@/days/ProposeDaySelectionPage'
import { useState } from 'react'

export default function Page() {
  const [currentPage, setCurrentPage] = useState('selection')

  const handleYes = () => setCurrentPage('yes')
  const handleNo = () => setCurrentPage('no')
  const handleBack = () => setCurrentPage('selection')
  const handleForgive = () => setCurrentPage('thankyou')
  const handleReveal = () => setCurrentPage('reveal')

  return (
    <main className="min-h-screen w-full">
      {/* {currentPage === 'selection' && <SelectionPage onYes={handleYes} onNo={handleNo} />} */}

      {currentPage === 'selection' && <ProposeDaySelectionPage onYes={handleYes} onNo={handleNo} />}
      {currentPage === 'no' && <HowDarePage onBack={handleBack} />}

      {/* {currentPage === 'yes' && <ApologyPage onBack={handleBack} handleForgive={handleForgive} />} */}

      {currentPage === 'yes' && <ProposeDay handleReveal={handleReveal} />}

      {currentPage === 'thankyou' && <ThankYouPage onBack={handleBack} />}
      {currentPage === 'reveal' && <RevealPage onBack={handleBack} />}
    </main>
  )
}
