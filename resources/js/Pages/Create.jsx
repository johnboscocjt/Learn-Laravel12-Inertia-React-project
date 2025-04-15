import { useForm } from "@inertiajs/react"

export default function Create(){
    // console.log(useForm());
    const {data, setData, post, processing, errors} = useForm({
        'body': '',
    })

    return (
        <>
            <h1 className="title">Create a new post </h1>

            <div className="w-1/2 mx-auto">
                <form>
                    <textarea rows="10" value={data.body}
                        onChange={e => setData('body', e.target.value)}
                    ></textarea>

                    <button className="primary-btn mt-4">Create Post</button>
                </form>
            </div>
        </>
    )
}
