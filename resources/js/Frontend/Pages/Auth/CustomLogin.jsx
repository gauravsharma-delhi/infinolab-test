import { useForm } from '@inertiajs/react';

export default function CustomLogin({ errors }) {

    const { data, setData, post, processing } = useForm({
        email: '',
        password: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/custom-login');
    };

    return (
        <div>
            <h1>Custom Login</h1>

            <form onSubmit={submit}>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <button disabled={processing}>
                    {processing ? 'Logging in...' : 'Login'}
                </button>

            </form>
        </div>
    );
}