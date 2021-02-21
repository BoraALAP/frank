import CategoryTemplate from "../../template/Category";
import { Capitilize } from "../../lib/Stringer";

export default function Category({ query }) {
  return <CategoryTemplate category={Capitilize(query.name)} />;
}
