import DesignOptionsProductTemplate from "../../../template/designOptions/product";

export default function designoptions({ query }) {
  return <DesignOptionsProductTemplate productName={query.name} />;
}
