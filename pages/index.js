import Head from "next/head";
import Link from "next/link";
import { promises as fs } from 'fs'
import path from 'path'

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const sources = await fs.readdir(dataDirectory)
  const stats = sources.map(async (dirname) => {
    const statDir = path.join(dataDirectory, dirname)
    const dateFiles = await fs.readdir(statDir)
    return {
      source: dirname,
      dates: await Promise.all(dateFiles.map(async (filename) => {
        
        const filePath = path.join(statDir, filename)
        const fileContents = await fs.readFile(filePath, 'utf8');
        return {
          date: filename.replace(".json", ""),
          content: JSON.parse(fileContents)
        }
      }))
    }
  })
  return {
    props:{
      stats: await Promise.all(stats),
    }
  }
}

export default function Home({stats}) {
    return (
      <div  class="min-w-full" className="flex justify-center">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>Summarize news</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main class="container min-w-full">
            <h1 class="text-6xl p-3 font-extrabold">
                <b>summ</b>arize<b>.news</b>
            </h1>
            <h2 class="text-xl p-3">
              {stats.map((stat) => (
                <div class="text-sm">
                  <h3 class="text-3xl font-extrabold">{stat.source}</h3>
                  <div class="grid grid-cols-7 gap-1">
                    <div class="bg-blue-100">Monday</div>
                    <div class="bg-blue-100">Tuesday</div>
                    <div class="bg-blue-100">Wednesday</div>
                    <div class="bg-blue-100">Thursday</div>
                    <div class="bg-blue-100">Friday</div>
                    <div class="bg-blue-100">Saturday</div>
                    <div class="bg-blue-100">Sunday</div>
                    <div> </div> <div> </div>
                  {stat.dates.map((dt) => (
                    <div class="hover:underline">
                    <Link
                    href={{ pathname: `/${stat.source}/[id]`, query: {id: `${dt.date}`}}}>
                      {dt.date}
                    </Link>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
            </h2>
        </main>
      </div>
    )
}
