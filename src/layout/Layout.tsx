import React from "react"
import { Box } from "theme-ui"
import Head from "./Head"
import Style from "./Style"
import Main from "../ui/containers/Main"
import Transition from "./Transition"

type Props = {
  title: string
  description: string
  url: string
  imageUrl: string
  imageAlt: string
  twitter: string
  children: React.ReactNode
}

const Layout = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  twitter,
  children,
}) => (
  <>
    <Head {...{ title, description, url, imageUrl, imageAlt, twitter }} />
    <Main>
      <Transition>{children}</Transition>
    </Main>
    <Style />
  </>
)

export default React.memo(Layout)
