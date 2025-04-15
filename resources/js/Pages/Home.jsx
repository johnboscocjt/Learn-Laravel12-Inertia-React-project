import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    // to verify in console of browser tools
    // console.log(posts);

    return (
        <>
            <h1 className="title">Hello</h1>

            {/* render the posts, list the posts and loop through them */}
            <div>

                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600-">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                    </div>
                ))}

            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    // <a href={link.url}>{link.label}</a>
                    // check link url if true
                    link.url ?

                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''
                                }`}
                        />

                        :

                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        >
                        </span>


                ))}


            </div>

        </>
    );
}


