import { feedPosts } from '@/lib/feed-data';
import Post from './post/post';

export default function FeedTab() {
  return feedPosts.map((post, index) => <Post key={index} post={post} />);
}
