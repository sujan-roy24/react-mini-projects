import "./Sidebar.css";
import { SECTIONS } from "../../config/sections";

export default function Sidebar({ onNavigate, collapsed }) {
    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <ul>
                {SECTIONS.map((section) => (
                    <li key={section.id}>
                        <button onClick={() => onNavigate(section)}>
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}