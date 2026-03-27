import { Link, router } from '@inertiajs/react';

export default function Index({ items }) {

    const deleteItem = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(`/items/${id}`);
        }
    };

    return (
        <div>
            <h1>Items List</h1>

            <Link href="/items/create">Add New</Link>

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}

                        <Link href={`/items/${item.id}/edit`}> Edit </Link>

                        <button onClick={() => deleteItem(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}