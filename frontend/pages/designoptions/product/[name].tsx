import DesignOptionsProductTemplate from "../../../template/designOptions/Product";

export default function designoptions({ query }) {
  return <DesignOptionsProductTemplate productName={query.name} />;
}
