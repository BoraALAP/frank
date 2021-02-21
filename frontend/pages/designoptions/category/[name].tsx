import { Capitilize } from "../../../lib/Stringer";
import { DesignOptionsCategoryTemplate } from "../../../template/designOptions/Category";

export default function designoptions({ query }) {
  return (
    <DesignOptionsCategoryTemplate categoryName={Capitilize(query.name)} />
  );
}
