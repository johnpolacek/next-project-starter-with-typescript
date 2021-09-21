import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"

type Props = {
  mode: string
}

const AppModePage = ({mode}: Props) => {
  return (
    <Wrapper
      url={"/app/" + mode}
      title={"Project Starter | App Mode " + mode.toUpperCase()}
      description={
        mode.toUpperCase() +
        "Next.js Project Starter Example with parameterized route props"
      }
    >
      <App {...props} />
    </Wrapper>
  )
}

AppModePage.getInitialProps = ({ query }) => {
  const mode = query.mode || null
  return { mode }
}

export default AppModePage
