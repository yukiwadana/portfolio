import React from 'react'
import { useColorMode, Flex, Link, Text, IconButton } from '@chakra-ui/core'

const Footer = () => {
  const { colorMode } = useColorMode()

  const redColor = {
    light: 'red.500',
    dark: 'red.200',
  }
  const yellowColor = {
    light: 'yellow.500',
    dark: 'yellow.200',
  }
  const greenColor = {
    light: 'green.500',
    dark: 'green.200',
  }
  const blueColor = {
    light: 'blue.500',
    dark: 'blue.200',
  }

  return (
    <Flex flexDirection="column">
      <Flex justify="center" mb={4}>
        <Text>Made with ❤️ by Yuki</Text>
      </Flex>
      <Flex justify="center" mb={4}>
        {/* <Link
          href="https://twitter.com/jermainecheng"
          title="Twitter"
          isExternal
        >
          <IconButton
            aria-label="Twitter"
            icon="twitter"
            size="lg"
            color={redColor[colorMode]}
            variant="ghost"
          />
        </Link> */}
        <Link href="https://github.com/yukiwadana" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color={yellowColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/yuki-wadana-5262b41b8/"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon="linkedin"
            size="lg"
            color={greenColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link href="mailto:yukiwadana@outlook.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="mail"
            size="lg"
            color={blueColor[colorMode]}
            variant="ghost"
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
