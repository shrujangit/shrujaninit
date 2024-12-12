export default function TabButton({label, isSelected, ...props}) {

    return (
        <li>
            <button className={isSelected ? 'active': null} {...props}>{label}</button>
        </li>
    );
}