import Header from "../Components/Header";

export default function FrontLayout({ children, contact }) {
    return (
        <>
            <Header contact={contact} />
            <main>{children}</main>
        </>
    );
}