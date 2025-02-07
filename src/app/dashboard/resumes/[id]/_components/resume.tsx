'use client'

import { FormProvider, useForm } from 'react-hook-form'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import { InfosSidebar } from './infos-sidebar'
import { ResumeContent } from './resume-content/index.'
import { StructureSidebar } from './structure-sidebar'

export const Resume = () => {
  const defaultValues: ResumeData = {
    content: {
      image: {
        url: '',
        visible: true,
      },
      infos: {
        email: '',
        fullName: '',
        headline: '',
        location: '',
        phone: '',
        website: '',
      },
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
      summary: '',
    },
    structure: {
      template: 'ditto',
      colorTheme: 'slate',
      language: 'portuguese',
      layout: {
        mainSections: [
          { key: 'socialMedias' },
          { key: 'summary' },
          { key: 'experiences' },
          { key: 'educations' },
          { key: 'certifications' },
          { key: 'projects' },
        ],
        sidebarSections: [{ key: 'skills' }, { key: 'languages' }],
      },
    },
  }
  const methods = useForm<ResumeData>({
    defaultValues,
  })
  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  )
}
