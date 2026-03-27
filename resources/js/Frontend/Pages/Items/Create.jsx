import { useForm } from '@inertiajs/react';

export default function Create() {

    const { data, setData, post, errors } = useForm({
        name: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/items');
    };

    return (
        <div>
            <h1>Create Item</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />

                {errors.name && <div>{errors.name}</div>}

                <button type="submit">Save</button>
            </form>
        </div>
    );
}