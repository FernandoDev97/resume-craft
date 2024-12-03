import { Bot } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'

export const AiGenerationDropdown = () => {
  return (
    <Button className="gap-2 text-xs p-2.5 py-1 h-9">
      <Bot size={20} />
      Inteligência Artificial
    </Button>
  )
}
