import Link from 'next/link';
import { useTina } from 'tinacms/dist/edit-state';

import { client } from '../../.tina/__generated__/client';
import Layout from '../../components/Layout';

function PostList({ query, variables, data }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data: posts } = useTina({
    query,
    variables,
    data,
  });

  const postsList = posts.postConnection.edges;

  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default PostList;

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      // myOtherProp: 'some-other-data',
    },
  };
};
