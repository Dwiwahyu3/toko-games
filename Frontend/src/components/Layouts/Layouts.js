import Head from "next/head"
import { Fragment } from "react"

export const Layouts = ({children, title}) => {
    return (
        <Fragment>
            <Head>
                <title> {title} </title>
            </Head>
            <main>
            {children}
            </main>
        </Fragment>
    )
}