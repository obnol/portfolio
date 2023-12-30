import { profilePosts } from '@/lib/profile-data';
import Post from './post/post';

export default function ProfileTab() {
  return profilePosts.map((post, index) => <Post key={index} post={post} />);
}
