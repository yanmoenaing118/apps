const fakeData = [
  {
    id: 1,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam!
        Eligendi quo, dolor qui, doloribus commodi necessitatibus voluptas in
        earum porro facere, suscipit aut ad sint vitae reprehenderit ducimus
        blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Eaque asperiores reiciendis, cupiditate debitis nisi tenetur, labore
        magni laudantium quae itaque consectetur! Vel pariatur molestiae
        ratione, cumque ipsam cum deleniti maiores!
        `,
  },

  {
    id: 2,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam!
        Eligendi quo, dolor qui, doloribus commodi necessitatibus voluptas in
        earum porro facere, suscipit aut ad sint vitae reprehenderit ducimus
        blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Eaque asperiores reiciendis, cupiditate debitis nisi tenetur, labore
        magni laudantium quae itaque consectetur! Vel pariatur molestiae
        ratione, cumque ipsam cum deleniti maiores!
        `,
  },
];
export default function StaticGenerationWithExternalData({ posts }) {
  return (
    <section>
      <h1>Statically Generated with external data</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

function Post({ post }) {
  return <p>{post.body}</p>;
}

export async function getStaticProps() {
  const posts = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(fakeData), 100);
  });

  return {
    props: {
      posts,
    },
  };
}
