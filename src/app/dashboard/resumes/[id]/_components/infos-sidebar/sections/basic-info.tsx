import { UserRound } from 'lucide-react'
import React from 'react'

import { SectionTitle } from '../section-title'

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle title="Informações Básicas" icon={UserRound} />
    </div>
  )
}
