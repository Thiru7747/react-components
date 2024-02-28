import  Avatarmore from "./Avatarmore";


function CardRenderer({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export function Card() {
    return (
        <CardRenderer>
            <Avatarmore
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </CardRenderer>
    );

}