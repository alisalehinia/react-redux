import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../redux/posts/postAction";
const PostSaga = () => {
    const [postId, setPostId] = useState("");
    const { loading, error, post } = useSelector(state => state.post);
    const dispatch = useDispatch();
    console.log(post)
    return (
        <>
            <h2>redux-saga middleWare</h2>
            <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
            <button onClick={() => dispatch(fetchPostRequest(postId))}>get post</button>
            {loading ? (<p>loading</p>) : error ? (<p>{error}</p>) : post && post.title ? (
                <div>
                    <h4>post data</h4>
                    <div>post title: {post.title}</div>
                    <div>post detail : {post.body}</div>
                </div>
            ) : <p>fetch some post</p>
            }
        </>
    );
}

export default PostSaga;