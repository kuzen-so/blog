import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '我一直接触做各种各样的小项目，这也是我在技术领域中尝试和探索的最好见证,这里就是我筛选出来我觉得还不错的项目合集。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我过去的项目冒险之旅。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        作为一名热衷于学习技术的开发者,我一直在学习和开发各种小项目，包括<b>开源项目</b>和<b>实验项目</b>。以下是我精选的一些项目合集，它们是我在技术领域探索与尝试的<b>最佳见证</b>🙌 。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
