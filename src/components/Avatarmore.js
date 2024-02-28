import { GetPicUrl } from './GetPicUrl';

export default function Avatarmore(size, person){
    return (
        <img
            className="Avatarmore"
            src={GetPicUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}