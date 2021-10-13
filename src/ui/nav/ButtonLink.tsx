import { Link as A } from "theme-ui"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  href: string
}

const ButtonLink = ({ href, children }: Props) => (
  <Link href={href}>
    <A
      sx={{
        textDecoration: "none",
        fontSize: 3,
        px: 3,
        py: 2,
        bg: "black",
        color: "#fff",
        boxShadow: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      {children}
    </A>
  </Link>
)

export default ButtonLink
