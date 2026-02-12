'use client'

import { ApologyPage } from '@/components/AppologyPage'
import ChocolateDay from '@/components/ChocolateDay'
import { HowDarePage } from '@/components/HowDarePage'
import ProposeDay from '@/components/ProposeDay'
import { RevealPage } from '@/components/RevealPage'
import RoseDayLetter from '@/components/RoseDay'
import { SelectionPage } from '@/components/SelectionPage'
import { ThankYouPage } from '@/components/ThankYouPage'
import { ChocolateDaySelectionPage } from '@/days/ChocolateDaySelection'
import HugDayMain from '@/days/hugday/HugDay'
import { HugRevealPage } from '@/days/hugday/HugDayReveal'
import { HugDaySelectionPage } from '@/days/hugday/HugDaySelection'
import PromiseDayMain from '@/days/promise/PromiseDay'
import { PromiseDaySelectionPage } from '@/days/promise/PromiseDaySelection'
import { PromiseRevealPage } from '@/days/promise/PromiseReveal'
import { ProposeDaySelectionPage } from '@/days/ProposeDaySelectionPage'
import TeddyDayHelloKitty from '@/days/teddy/TeddyDayPage'
import { TeddyRevealPage } from '@/days/teddy/TeddyDayReveal'
import { TeddyDaySelectionPage } from '@/days/teddy/TeddyDaySelection'
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

      {currentPage === 'selection' && <HugDaySelectionPage onYes={handleYes} onNo={handleNo} />}
      {currentPage === 'no' && <HowDarePage onBack={handleBack} />}

      {/* {currentPage === 'yes' && <ApologyPage onBack={handleBack} handleForgive={handleForgive} />} */}

      {currentPage === 'yes' && <HugDayMain handleReveal={handleReveal} />}

      {currentPage === 'thankyou' && <ThankYouPage onBack={handleBack} />}

      {currentPage === 'reveal' && <HugRevealPage onBack={handleBack} />}
    </main>
  )
}
