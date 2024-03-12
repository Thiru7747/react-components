function Item({ name, isPacked }) {
    //1. if else
    // if (isPacked) {
    //     return <li className="item">{name} ✔</li>;
    // }else {
    //     return <li className="item">{name}</li>;
    // }

    //2. && operator
    // return(
    // <li className="item">
    //     {name} {isPacked && '✔'}
    // </li>
    // )

    // 3. ternary operator
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✔'}
                </del>
            ) : (
                name
            )}
        </li>
    );

    // 4. conditionally asssigning a variable
    // let itemContent = name;
    // if (isPacked) {
    //     itemContent = name + " ✔";
    // }
    // return (
    //     <li className="item">
    //         {itemContent}
    //     </li>
    // );
}

export default function PackingList() {
    const itemsArr = [
        {
            isPacked: true,
            name: "Space suit"
        },
        {
            isPacked: false,
            name: "Helmet with a golden leaf"
        },
        {
            isPacked: false,
            name: "Photo of Tam"
        }
    ]
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                {itemsArr.map((item) => (
                    <Item
                        isPacked={item.isPacked}
                        name={item.name}
                    />
                ))}
            </ul>
        </section>
    );
}
