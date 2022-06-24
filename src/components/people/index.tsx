import { peopleType } from "../../types/people.types";
const People = (props: peopleType) => {
    return (
        <table className={props.bootstrapTableClasses && props.bootstrapTableClasses.join(" ")}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>phoneNumber</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {props.children.map(a => a)}

            </tbody>

        </table>
    );
};
export default People;