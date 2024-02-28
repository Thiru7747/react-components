import { getImageUrl } from "./ImageUrl";

function ScientistsProfile({ scientsObj }) {
    return (
        <>
            <section className="profile">
                <h2>{scientsObj.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(scientsObj.imageUrl)}
                    alt={scientsObj.name}
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {scientsObj.prffession}
                    </li>
                    <li>
                        <b>Awards: {scientsObj.awardCount} </b>
                        {scientsObj.awardList}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {scientsObj.discoverd}
                    </li>
                </ul>
            </section>
        </>
    );
}

export default function Scientists() {
    const scient1 = {
        name: 'Maria Skłodowska-Curie',
        imageUrl: 'szV5sdG',
        width: '70',
        height: '70',
        prffession: 'physicist and chemist',
        awardCount: '4',
        awardList: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discoverd: 'polonium (chemical element)'
    }

    const scient2 = {
        name: 'Katsuko Saruhashi',
        imageUrl: 'YfeOqp2',
        width: '70',
        height: '70',
        prffession: 'geochemist',
        awardCount: '2',
        awardList: '(Miyake Prize for geochemistry, Tanaka Prize)',
        discoverd: 'a method for measuring carbon dioxide in seawater'
    }

    const scientsArr = [scient1, scient2]
    return (
        <div>
            <h1>Notable Scientists</h1>
            {scientsArr.map((scients) => (
                <ScientistsProfile key={scients.name} scientsObj={scients} />
            ))}
        </div>
    );
}
