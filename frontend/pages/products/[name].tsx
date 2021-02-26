import ProductTemplate from "../../template/Product";
import { Capitilize } from "../../lib/Stringer";

export default function Product({ query }) {
  console.log(query.name);

  return <ProductTemplate product={Capitilize(query.name)} />;
}
