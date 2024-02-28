// export const metadata = {
//   title: "Posts - Next.js",
//   description: "A simple blog built with Next.js",
// };

export async function generateMetadata({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return {
    title: `Scrobs Blog: ${post.title}`,
    description: `This is an article about ${post.title}`,
  };
}

// if doing a dynamic route, you need to export a function called generateMetadata() that returns the metadata information.

export default async function Page({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return (
    <div>
      <p>{post.id}</p>
      <h2 className="underline decoration-sky-500">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
