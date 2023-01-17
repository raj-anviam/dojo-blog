import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "first blog", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", author: "user 1", id: 1},
        {title: "second blog", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", author: "user 2", id: 2},
        {title: "third blog", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", author: "user 3", id: 3},
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;