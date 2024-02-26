import { GetAge } from "./GetAge";

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}


export default function TodoList() {
    const profile = 'https://i.imgur.com/yXOvdOSs.jpg';
    const profileName = 'Hedy Lamarr';
    const today = new Date();
    const styles = {
        color: 'blue',
        marginBottom: '10px',
    }

    const person = {
        age: '24',
    }

    return (
        <>
            <h1 style={styles}>she is {GetAge(person)} years old</h1>
            <h1 style={styles}>{profileName}'s Todos</h1>
            <img
                src={profile}
                alt={profileName}
                className="photo"
            />
            <h1>To Do List for {formatDate(today)}</h1>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}