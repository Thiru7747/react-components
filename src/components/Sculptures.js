import { useState } from 'react';
import { SculptureList } from './SculptureList.js';

export default function Sculptures() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < SculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = SculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {SculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <br></br>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
