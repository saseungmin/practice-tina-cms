import { useTina } from 'tinacms/dist/edit-state';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { client } from '../.tina/__generated__/client';
import Layout from '../components/Layout';

function Home({ query, variables, data }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data: postContent } = useTina({
    query,
    variables,
    data,
  });

  const content = postContent.page.body;

  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  );
}

export default Home;

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: 'home.mdx',
  });

  return {
    props: {
      data,
      query,
      variables,
      // myOtherProp: 'some-other-data',
    },
  };
};
