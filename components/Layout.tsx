import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


type Props = {
    children?: ReactNode
    title?: string
}

const SiteContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
`



const PageContent = styled.div`
  flex-grow: 1;
  align-self: center;
  padding: 30px;
  background-color: #f5f5f5;
  max-width: 1024px;
`



const Layout = ({children, title = 'nshah.org'}: Props) => (
    <SiteContent>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png" />
        </Head>
        <Header/>
        <PageContent>
            {children}
        </PageContent>
        <Footer/>
    </SiteContent>
)

export default Layout
