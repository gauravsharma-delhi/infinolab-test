import { useForm, Link } from '@inertiajs/react';

export default function CustomRegister({ errors }) {

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post('/custom-register', {
            onSuccess: () => reset('password', 'password_confirmation')
        });
    };

    return (
        <div style={styles.container}>

            <div style={styles.card}>
                <h2 style={styles.title}>Create Account</h2>

                <form onSubmit={submit} style={styles.form}>

                    {/* Name */}
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            style={styles.input}
                        />
                        {errors.name && <p style={styles.error}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div style={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            style={styles.input}
                        />
                        {errors.email && <p style={styles.error}>{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            style={styles.input}
                        />
                        {errors.password && <p style={styles.error}>{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={processing}
                        style={{
                            ...styles.button,
                            opacity: processing ? 0.6 : 1
                        }}
                    >
                        {processing ? 'Registering...' : 'Register'}
                    </button>

                </form>

                {/* Login Link */}
                <p style={styles.footerText}>
                    Already have an account?{' '}
                    <Link href="/custom-login" style={styles.link}>
                        Login
                    </Link>
                </p>
            </div>

        </div>
    );
}

/* 🎨 Simple Styling */
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f9'
    },
    card: {
        width: '350px',
        padding: '30px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px'
    },
    footerText: {
        marginTop: '15px',
        textAlign: 'center'
    },
    link: {
        color: '#007bff',
        textDecoration: 'none'
    }
};