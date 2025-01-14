import type { Authors } from 'contentlayer/generated'
import { ReactNode } from 'react'

import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export interface AuthorLayoutProps {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const AuthorLayout = ({ children, content }: AuthorLayoutProps) => {
  const { name, avatar, occupation, company } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="pt-8">
        <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Dale Larroder</h1>
            <h2 className="text-sm font-normal md:text-base">
              {occupation} <span className="font-semibold">{company}</span>
            </h2>
          </div>
          <div>
            <Image
              alt="Dale Larroder"
              height={130}
              width={130}
              src={avatar || ''}
              className="rounded-full object-scale-down grayscale"
            />
          </div>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}


module.exports.default = AuthorLayout