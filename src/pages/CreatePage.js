import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function CreatePage() {
    const navigate = useNavigate();

    async function createPost(newPost) {
        newPost.uid = "fTs84KRoYw5pRZEWCq2Z"; // default user id (RACE)

        const url = "http://localhost:3000/json-api/posts/";
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });
        navigate("/");
    }

    return (
        <section className="page">
            <h1>Create New Post</h1>
            <PostForm savePost={createPost} />
        </section>
    );
}
