import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'

import styles from './theme.module.css'
import Header from "./header";
import Posts from "./posts";


function Layout({ pageOpts, children }) {
  // Front matter of the current page:
  // pageOpts.frontMatter

  // You can build the sidebar based on the structure data from `pageMap`:

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{pageOpts.title}</title>
      </Head>
      <div className="flex flex-col flex-grow prose prose-lg lg:prose-xl prose-stone container px-4 mx-auto mb-6 w-full">
        <Header />
        <main className="flex-grow">
          <article>
            <MDXProvider
              components={{
                // You can add custom components here for MDX
                h1: (props) => <h1 {...props} />,
                pre: ({ filename, ...props }) => {
                  return (
                    <div className={styles.codeblock}>
                      {filename ? (
                        <div className={styles.filename}>{filename}</div>
                      ) : null}
                      <pre {...props} />
                    </div>
                  )
                },
              }}
            >
              {children}
            </MDXProvider>
          </article>
        </main>
        <footer className="mt-auto text-center">
          <p>2023 © Aenean Blog</p>
        </footer>
      </div>
    </div>
  )
}

export default function Theme(props) {
  // These are just initial setup for Nextra themes
  const { route } = useRouter()
  const context = globalThis.__nextra_pageContext__[route]
  if (!context) throw new Error(`No content found for ${route}.`)
  const { pageOpts, Content } = context
  

  return (
    <Layout pageOpts={pageOpts}>
      <Content {...props} />
    </Layout>
  )
}
