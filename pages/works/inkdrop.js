import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container >
        <Title>
          Inkdrop <Badge>2023.6.1</Badge>
        </Title>
        <Paragraph>
          a Note Taking App for Markdown Lovers, built with Electron, React, Redux, and TypeScript.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/" >
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Electron, React, Redux, TypeScript</span>
          </ListItem>
          <ListItem>
            <Meta>Plantform</Meta>
            <span>MacOS/IOS/IpadOS/WatchOS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
}
export default Work
