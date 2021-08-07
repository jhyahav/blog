import AuthCheck from '../../components/AuthCheck';
import PostList from '../../components/PostList';
import CreatePost from '../../components/CreatePost';


//Uses CSR because SEO/crawling is unimportant here
export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <PostList />
        <CreatePost />
      </AuthCheck>
    </main>
  );
}

