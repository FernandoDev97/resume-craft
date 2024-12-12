'use client'

import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { cn } from '@/lib/utils'

import { MenuBar } from './menu-bar'

interface EditorProps {
  value: string
  onChange?: (value: string) => void
  className?: string
}

export const Editor = ({ value, className, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['headings', 'paragraph'],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4',
      },
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML())
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
    autofocus: false,
  })
  return (
    <div
      className={cn(
        'bg-background border border-muted rounded-2xl w-full flex flex-col',
        className,
      )}
    >
      <MenuBar editor={editor} />
      <div className="h-full [&>div]:h-full flex flex-col overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
