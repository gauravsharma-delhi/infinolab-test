import { useForm } from '@inertiajs/react';

export default function Edit({ item }) {

    const { data, setData, put, errors } = useForm({
        name: item.name
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/items/${item.id}`);
    };

    return (
        <div>
            <h1>Edit Item</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />

                {errors.name && <div>{errors.name}</div>}

                <button type="submit">Update</button>
            </form>
        </div>
    );
}