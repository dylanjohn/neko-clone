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
    <>
      <Head>
        <title>{pageOpts.title}</title>
      </Head>
      <div className="prose lg:prose-lg prose-zinc container mt-4 sm:mt-12 px-4 mx-auto mb-6 w-full px-4">
        <Header />
        <main>
          <article>
            <MDXProvider
              components={{
                // You can add custom components here for MDX
                h1: (props) => <h1 className="mb-0" {...props} />,
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
              <div className="">
                {children}
              </div>
            </MDXProvider>
            {/* <Posts /> */}
          </article>
        </main>
        {/* <footer>This is the footer</footer> */}
      </div>
    </>
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
