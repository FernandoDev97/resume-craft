'use client'

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { ResumeTemplate } from './templates'
export const ResumeContent = () => {
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
          <TransformComponent>
            <ResumeTemplate />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  )
}
