import classes from './SkeletonPost.module.scss';

function SkeletonPost(props) {
  return (
    <div className={`${classes.skeletonPost} ${props.className}`}>
      <header>
        <span></span>
        <div>
          {/*eslint-disable-next-line*/}
          <h2></h2>
          <p></p>
        </div>
      </header>
      <main>
        <p></p>
        <div></div>
      </main>
      <footer>
        <div>
          <button>
            <span></span>
          </button>
          <span></span>
        </div>
        <div>
          <span></span>
          <button>
            <span></span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default SkeletonPost;
