import FrontLayout from "../Layouts/FrontLayout";

export default function Home(props) {
    return (
        <FrontLayout contact={props.contact}>
            <h1>Home Page</h1>
        </FrontLayout>
    );
}