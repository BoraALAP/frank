import ProductTemplate from "../../template/Product";
import { Capitilize } from "../../lib/Stringer";

export default function Product({ query }) {
  return <ProductTemplate product={Capitilize(query.name)} />;
}
