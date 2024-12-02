import React from 'react'

import { ResumesList } from './_components/resumes-list'

const DashboardResumesPage = () => {
  return (
    <>
      <h1 className="text-4xl font-title font-bold mb-6">Curriculos</h1>
      <ResumesList />
    </>
  )
}

export default DashboardResumesPage
