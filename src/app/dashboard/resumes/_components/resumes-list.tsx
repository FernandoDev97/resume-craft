import React from 'react'

import { AddResumeButton } from './add-resume-button'
import { NewResumeDiolog } from './new-resume-diolog'
import { ResumeCard } from './resume-card'

export const ResumesList = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5 flex-1">
      <NewResumeDiolog>
        <AddResumeButton />
      </NewResumeDiolog>
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  )
}
