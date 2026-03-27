import { useForm } from "@inertiajs/react";

export default function Contact() {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        mobile: '',
        description: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact-submit');
    };

    return (
        <form onSubmit={submit}>
            <input onChange={e => setData('name', e.target.value)} placeholder="Name" />
            <input onChange={e => setData('email', e.target.value)} placeholder="Email" />
            <input onChange={e => setData('mobile', e.target.value)} placeholder="Mobile" />
            <textarea onChange={e => setData('description', e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    );
}