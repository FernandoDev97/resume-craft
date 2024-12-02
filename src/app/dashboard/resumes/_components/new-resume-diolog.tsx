'use client'

import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'

interface FormData {
  title: string
}

export const NewResumeDiolog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log(data)
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar escolha um tiítulo para saeu currículo"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField name="title" label="Título" required />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
