import content from "./content.json";
import Accordion from '../components/Accordion'
import Head from "next/head";

export default function Home() {
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
            Reddit analytics: main topics, keyword frequency and sentiment for 1-31 October 2021
            </h2>
           <div class="container flex min-w-full p-3">
            {content.subreddits.map(subreddit => (
                <div  class="border-b  w-full">
                  <p class="text-md">reddit: /r/{subreddit.name}/</p>
                  <Accordion>
                      {subreddit.values.map(keyword => (
                        <div label={keyword.label} count={keyword.count} sentiment={keyword.sentiment} >
                        {keyword.links.map(link => (
                          <p class="text-xs hover:bg-blue-50"><a target="_blank" href={'https://www.reddit.com'+link}>{link}</a></p>
                        ))}
                        </div>
                      ))}
                  </Accordion>
                </div>
            ))}
            </div>
        </main>
      </div>
    )
}
