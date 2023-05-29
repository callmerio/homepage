import {
  Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem,
  IconButton, Container, Heading, Stack, useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { forwardRef } from 'react';
import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButtom from './theme-toggle-buttom';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.600", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      mr={4}
    >
      {children}
    </Link>
  )
}
const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }} // ? 这里的backdropFilter是什么意思 ? // 用于给元素添加高斯模糊
      zIndex={1}
      {...props} // ? 这里的props是哪里来的 ? // 从_app.js传过来的
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        warp="warp"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}> {/*// ? letterSpacing是什么意思 ? // 字间距*/}
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>Works</LinkItem>
          <LinkItem href='/posts' path={path}>Posts</LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButtom />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="https://uses.craftz.dog/">
                  Uses
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box >
      </Container >
    </Box >
  )
}

export default Navbar
