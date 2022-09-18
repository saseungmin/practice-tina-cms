import { useTina } from 'tinacms/dist/edit-state';

import { client } from '../../.tina/__generated__/client';
import { Layout } from '../../components/Layout';

function Home({ query, variables, data }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data: post } = useTina({
    query,
    variables,
    data,
  });

  return (
    <Layout>
      <code>
        <pre
          style={{
            backgroundColor: 'lightgray',
          }}
        >
          {JSON.stringify(post.post, null, 2)}
        </pre>
      </code>
    </Layout>
  );
}

export default Home;

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  const paths = data.postConnection.edges.map((x) => ({
    params: {
      slug: x.node._sys.filename,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: `${ctx.params.slug}.md`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
