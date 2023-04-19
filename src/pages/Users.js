import Data from "./users.json";

export default function Username() {
    return (
        <div className="block">
            {Data.map((data) => {
                return <div className="userName">{data.username}</div>;
            })}
        </div>
    );
}
