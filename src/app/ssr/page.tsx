type Post = {
  id: string;
  title: string;
};

export default async function SsrPage() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
