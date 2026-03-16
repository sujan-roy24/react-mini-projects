import { useState, Suspense } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { SECTIONS } from "../../config/sections";
import "./AppLayout.css";

export default function AppLayout() {
    const [CurrentComponent, setCurrentComponent] = useState(() => SECTIONS[0].Component);
    const [title, setTitle] = useState(SECTIONS[0].label);

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className="layout-container">
            <Header
                title={title}
                onToggleSidebar={toggleSidebar}
                collapsed={collapsed}
            />

            <div className="layout">
                <Sidebar
                    collapsed={collapsed}
                    onNavigate={(section) => {
                        if (!section?.Component) return;

                        setCurrentComponent(() => section.Component);
                        setTitle(section.label);
                    }}
                />

                <main className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        {CurrentComponent && <CurrentComponent />}
                    </Suspense>
                </main>
            </div>
        </div>
    );
}