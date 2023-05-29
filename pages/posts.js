import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'

const Posts = () => {

  return (
    <Layout title="Posts">
      <Container >
        <Heading as="h3" fontSize={20} mb={4}>Recents Posts</Heading>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My fish Workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
            <GridItem
              title="My Desk Setup"
              thumbnail={thumbMyDeskSetup}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My fish Workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
            <GridItem
              title="My Desk Setup"
              thumbnail={thumbMyDeskSetup}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout >
  )
}
export default Posts
