import { Link } from "react-router-dom";

type LinkType = {
    path: string,
    name: string
}
const Links = ({links}: any) => {
    return (
        <div className="text-center mt-1">
            {links.map((li: LinkType) => (
                <Link className="link" to={li.path}>{li.name}</Link>
            ))}
        </div>
    );
}

export default Links;