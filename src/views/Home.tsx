import { Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../markdown/home.mdx"

const Home = () => (
  <MDXProvider>
    <Box
      id="home"
      sx={{
        pt: [5, 6],
        px: 3,
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <MarkdownContent />
    </Box>
  </MDXProvider>
)

export default Home
