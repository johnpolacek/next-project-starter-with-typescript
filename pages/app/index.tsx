import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

type Props = {
  mode?: string
}

const AppIndexPage = ({mode}: Props) => {
  return (
    <Wrapper
      url={"/app/"}
      title={"Project Starter | App Example"}
      description={
        "Next.js Project Starter Example with parameterized route props"
      }
      twitter="johnpolacek"
      imageUrl="https://next-project-starter.vercel.app/project-logo.png"
      imageAlt="Next Project Starter Logo"
    >
      <App mode={mode} />
    </Wrapper>
  )
}

AppIndexPage.getInitialProps = ({ query }) => {
  const mode = query.mode || null
  return { mode }
}

export default AppIndexPage
