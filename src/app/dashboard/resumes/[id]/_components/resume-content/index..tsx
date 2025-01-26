'use client'

import { useFormContext } from 'react-hook-form'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { TransformControls } from './controls'
import { NavigationHeader } from './header'
import { ResumeTemplate } from './templates'
export const ResumeContent = () => {
  const { watch } = useFormContext<ResumeData>()

  const data = watch()
  return (
    <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader title="Teste" />
          <TransformControls title="teste" />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  )
}
