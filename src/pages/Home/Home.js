import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';

import classes from './Home.module.scss';

function Home() {
  return (
    <main className={classes.home}>
      <Navbar />
      <Post
        className={`${classes.post} ${classes.first}`}
        author="John Doe"
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tortor mauris. Etiam mauris metus, commodo id ex a, interdum porttitor ex. Vestibulum nulla velit, accumsan vulputate commodo ut, semper in augue. Nullam ut mauris urna. Pellentesque consectetur lacus tellus, id pharetra purus congue quis. Nunc tempor diam ut laoreet tincidunt. Quisque maximus diam quam, id accumsan lacus aliquam at."
      />
      <Post
        className={classes.post}
        author="Jan Kowalski"
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tortor mauris. Etiam mauris metus, commodo id ex a, interdum porttitor ex. Vestibulum nulla velit, accumsan vulputate commodo ut, semper in augue. Nullam ut mauris urna. Pellentesque consectetur lacus tellus, id pharetra purus congue quis. Nunc tempor diam ut laoreet tincidunt. Quisque maximus diam quam, id accumsan lacus aliquam at."
      />
      <Post
        className={classes.post}
        author="Max Mustermann"
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tortor mauris. Etiam mauris metus, commodo id ex a, interdum porttitor ex. Vestibulum nulla velit, accumsan vulputate commodo ut, semper in augue. Nullam ut mauris urna. Pellentesque consectetur lacus tellus, id pharetra purus congue quis. Nunc tempor diam ut laoreet tincidunt. Quisque maximus diam quam, id accumsan lacus aliquam at."
      />
    </main>
  );
}

export default Home;
