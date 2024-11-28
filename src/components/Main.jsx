import Card from "./Card/Card"
import posts from "../posts"
function Main() {
    return <main>
        <div className="container">
            <div className="row">
                {posts.map((post) =>
                    <div key={post.id} className="col-6">
                        <Card title={post.title} image={post.image} content={post.content} published={post.published} />
                    </div>
                )

                }

            </div>

        </div>
    </main>
}


export default Main