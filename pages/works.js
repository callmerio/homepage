import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform support, and a publishing platform.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="walknote" title="walkno" thumbnail={thumbWalknote}>
            IOS app to quick note-taking while walking.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform support, and a publishing platform.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walkno" thumbnail={thumbWalknote}>
              IOS app to quick note-taking while walking.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform support, and a publishing platform.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walkno" thumbnail={thumbWalknote}>
              IOS app to quick note-taking while walking.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container >
  </Layout>
)

export default Works
