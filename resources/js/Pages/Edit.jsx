import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";


export default function Edit({ post }) {

    const route = useRoute();

    // console.log(useForm());
    const { data, setData, put, processing, errors } = useForm({
        'body': post.body,
    })

    // function to handle form submission
    function submit(e) {
        e.preventDefault();
        // post the data to the server
        // put(`/posts/${post.id}`);
        put(route('posts.update', post));
    }

    // console log the errors
    // console.log(errors);


    return (
        <>
            <Head title="Edit">
                <meta
                    head-key="description"
                    name="description"
                    content="This is the create decription"
                />
            </Head>

            <h1 className="title">Update the post </h1>
            {/* get data test, get data out of the form */}
            {/* {data.body} */}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea rows="10" value={data.body}
                        onChange={e => setData('body', e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>
                    {/* errors */}
                    {errors.body && <p className="error">{errors.body}</p>}

                    <button className="primary-btn mt-4" disabled={processing} >Update Post</button>
                </form>
            </div>
        </>
    )
}
