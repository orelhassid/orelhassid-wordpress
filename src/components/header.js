import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"
import Menu from "./menu"

export default () => {
  return (
    <Heading as="h1">
      <Link to="/">
        <Grid gridTemplateColumns="50px 1fr" gridGap="20px">
          <Box maxW={50}>
            <GatsbyLogo />
          </Box>
          <Menu />
        </Grid>
      </Link>
    </Heading>
  )
}
