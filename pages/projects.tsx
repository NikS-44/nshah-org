import Link from 'next/link'
import Layout from '../components/Layout'

const ProjectsPage = () => (
  <Layout title="Projects">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default ProjectsPage
