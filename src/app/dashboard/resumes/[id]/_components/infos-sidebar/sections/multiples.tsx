import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  Share2,
} from 'lucide-react'
import React, { Fragment } from 'react'

import { Separator } from '@/components/ui/separator'

import { MultipleDragItemData, MultipleDragList } from '../multiple-drag-list'

const sectionsKeys: MultipleDragItemData[] = [
  {
    formKey: 'socialMedias',
    title: 'Redes Sociais',
    icon: Share2,
    titleKey: 'name',
    descriptionKey: 'username',
  },
  {
    formKey: 'experiences',
    title: 'Experiências',
    icon: BriefcaseBusiness,
    titleKey: 'company',
    descriptionKey: 'position',
  },
  {
    formKey: 'educations',
    title: 'Educação',
    icon: GraduationCap,
    titleKey: 'institution',
    descriptionKey: 'degree',
  },
  {
    formKey: 'skills',
    title: 'Habilidades',
    icon: BicepsFlexed,
    titleKey: 'name',
    descriptionKey: 'description',
  },
  {
    formKey: 'languages',
    title: 'Idiomas',
    icon: Languages,
    titleKey: 'name',
    descriptionKey: 'description',
  },
  {
    formKey: 'certifications',
    title: 'Certificações',
    icon: FileBadge2,
    titleKey: 'name',
    descriptionKey: 'institution',
  },
  {
    formKey: 'projects',
    title: 'Projetos',
    icon: Globe,
    titleKey: 'name',
    descriptionKey: 'description',
  },
]

export const MultiplesSections = () => {
  return (
    <div>
      {sectionsKeys.map((section) => (
        <Fragment key={`multiple-section-${section.title}`}>
          <Separator className="my-5" />
          <MultipleDragList data={section} onAdd={() => {}} onEdit={() => {}} />
        </Fragment>
      ))}
    </div>
  )
}