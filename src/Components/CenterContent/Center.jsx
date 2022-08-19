const Center = ({ isActive, setActive, item, setRightBar }) => {
    return (
        <li
            className={`item ${isActive === item.id ? "active" : ""}`}
            onClick={() => {
                setActive(item.id);
                setRightBar(item.title);
            }}
        >
            {item.title}
        </li>
    );
};

export default Center;