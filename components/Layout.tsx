import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components";
import Footer from "./Footer";


type Props = {
    children?: ReactNode
    title?: string
}

const SiteContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`



const PageContent = styled.div`
  flex-grow: 1;
`



const Layout = ({children, title = 'nshah.org'}: Props) => (
    <SiteContent>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <nav>
                <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
                <Link href="/users">Users List</Link> |{' '}
                <a href="/api/users">Users API</a>
            </nav>
        </header>
        <PageContent>
            {children}
        </PageContent>
        <Footer/>
    </SiteContent>
)

export default Layout
