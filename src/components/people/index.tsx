import { peopleType } from "../../types/people.types";
const People = (props:peopleType) => {
  <table className={props.bootstrapTableClasses&& props.bootstrapTableClasses.join(" ")}>
    {
        props.children.map(a=> a)
    }
  </table>
};
export default People;