const Center = ({ isActive, setActive, item }) => {
    return (
        <li
            className={`item ${isActive === item.id ? "active" : ""}`}
            onClick={() => {
                setActive(item.id);
            }}
        >
            {item.title}
        </li>
    );
};

export default Center;