export default function Header({ contact }) {
    return (
        <div>
            <h3>My Website</h3>
            <p>{contact?.email} | {contact?.mobile}</p>
        </div>
    );
}