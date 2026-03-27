import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export default function AdminLayout({ children, title }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Header title={title} />
                {children}
            </div>
        </div>
    );
}