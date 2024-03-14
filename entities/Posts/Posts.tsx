import { InView } from "react-intersection-observer";

import { CartPost } from "../CartPost/CartPost";
import { useGetPostsQuery } from "../../shared/api/postsApi";
import { useScroll } from "../../app/hooks/useScroll";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const { count, increment, decrement } = useScroll(99, 0);
  const { data: posts } = useGetPostsQuery(count);

  return (
    <>
      {posts !== 0 && (
        <InView
          as="div"
          threshold={0}
          rootMargin="150px"
          onChange={(inView) => inView && decrement()}
        />
      )}
      <ul className="post-list">
        {posts?.map((post: IPosts) => (
          <CartPost {...post} key={post.id} />
        ))}
      </ul>
      <InView
        as="div"
        threshold={0}
        rootMargin="90px"
        onChange={(inView) => inView && increment()}
      />
    </>
  );
};
