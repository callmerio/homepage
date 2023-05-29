import { Box, Container, Heading, Button, Image, Link, useColorModeValue, SimpleGrid, LinkBox, ListItem, Icon } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { BioSection, BioYear } from "../components/bio"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from "../components/layouts/article"
import { IoLogoGithub, IoLogoTwitter, IoLogoXbox, IoLogoRss } from 'react-icons/io'


const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, i&apos;m a full-stack developer based in China.
        </Box>

        <Box display={{ md: "flex" }} mt={10}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">Zong JinHong</Heading>
            <p>
              Digital &nbsp;
              <b>
                RioZRon
              </b>
              &nbsp;( Programmer / Designer / Gamer )
            </p>
          </Box>

          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
            <Image
              borderColor={"whiteAlpha.800"}
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/paopao.png'
              alt='Profile'
            />
          </Box>
        </Box>


        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">About Me</Heading>
          <Paragraph>
            Zong is a freelance and full-stack developer based in China with a passion for building digital services/stuff he wants.
            He has a knack for all things visual and loves UI/UX design. When not online, he loves hanging out. Currently
            he is living off of his own product called {' '}
            <Link href='/works/inkdrop' as={NextLink}>inkdrop</Link>
            .
          </Paragraph>
          <Box align='center' mt={4}>
            <NextLink href='/works'>
              { /*TODO: <Button rightIcon={<ChevronRightIcon />} colorSchema="teal"> */}
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Protfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant="section-title" >
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in YiChang(宜昌), Hubei, China.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated from Computer Science and Technology Major, Department of Computer Sci
            ence, Qingdao University of Technology (青岛理工大学计算机学院计算机科学与技术系).
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at RenRenXing(人人行) as a Test Development Enginee in QA department.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked at Zuoyebang(作业帮) as a Test Development Enginee in QA department.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Work as a freelance
          </BioSection>
        </Section>

        <Section delay={0.6}>
          <Heading as='h3' variant="section-title" >
            I L❤VE
          </Heading>
          <Paragraph>
            {/* TODO: 可以设置为 Post 的链接 */}
            <Link href='/Post/#Cat' as={NextLink}>Cat</Link>
            ,{' '}
            <Link href='/Post/#Coffee' as={NextLink}>Coffee</Link>
            ,{' '}
            <Link href='/Post/#Bike' as={NextLink}>Bike</Link>
            ,{' '}
            Xbox, Machine Learning, Designing, etc.
          </Paragraph>
        </Section>

        <Section delay={0.8}>
          <Heading as='h3' variant="section-title" >
            Ex Me
          </Heading>
          <SimpleGrid columns={[2, 3, 4]} gap={6}>
            <LinkBox>
              <Link href="https://github.com/riozron" target="_blank" >
                <Button variant="ghost" colorScheme="teal" leftIcon={
                  <Icon as={IoLogoGithub} />
                }>
                  @RioZRon
                </Button>
              </Link>
            </LinkBox>
            <LinkBox>
              <Link href="https://github.com/riozron" target="_blank" >
                <Button variant="ghost" colorScheme="teal" leftIcon={
                  <Icon as={IoLogoTwitter} />
                }>
                  @RioZRon
                </Button>
              </Link>
            </LinkBox>
            <LinkBox>
              <Link href="https://github.com/riozron" target="_blank" >
                <Button variant="ghost" colorScheme="teal" leftIcon={
                  <Icon as={IoLogoXbox} />
                }>
                  @RioZRon
                </Button>
              </Link>
            </LinkBox>
            <LinkBox>
              <Link href="https://github.com/riozron" target="_blank" >
                <Button variant="ghost" colorScheme="teal" leftIcon={
                  <Icon as={IoLogoRss} />
                }>
                  Follow Rss
                </Button>
              </Link>
            </LinkBox>
          </SimpleGrid>
        </Section>
      </Container >
    </Layout >
  )
}
export default Page
