import { gql, useQuery } from "@apollo/client";

import { Container } from "../components/layout/Container";
import { ProductCard } from "../components/pageSpecific/products/ProductCard";
import { PageTitle } from "../components/layout/PageTitle";
import { Loading } from "../UI/Loading";

export default function CategoryTemplate({ category }) {
  const { data, loading, error } = useQuery(CATEGORY_QUERY, {
    variables: { category: category },
  });

  if (loading) {
    return <Loading />;
  }

  const { name, products } = data?.allProductCategories[0];

  const productsWithoutHide = products.filter((product) => !product.hide);

  let links = [];
  switch (name) {
    case "Windows":
      links = [
        {
          name: "Entry Doors",
          href: "/categories/entry_doors",
        },
        {
          name: "Sliding Doors",
          href: "/categories/sliding_doors",
        },
        {
          name: "Design Options",
          href: `/designoptions/category/${name}`,
        },
      ];
      break;
    case "Sliding Doors":
      links = [
        {
          name: "Windows",
          href: "/categories/windows",
        },
        {
          name: "Entry Doors",
          href: "/categories/entry_doors",
        },
        {
          name: "Design Options",
          href: `/designoptions/category/${name}`,
        },
      ];
      break;
    case "Entry Doors":
      links = [
        {
          name: "Windows",
          href: "/categories/windows",
        },
        {
          name: "Sliding Doors",
          href: "/categories/sliding_doors",
        },
        {
          name: "Design Options",
          href: `/designoptions/category/${name}`,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Container space pageGap title={name}>
      <PageTitle title={name} links={links} padding />
      {productsWithoutHide.map((product, index) => {
        return (
          <ProductCard
            product={product}
            side={index! % 2 && true}
            key={product.id}
          ></ProductCard>
        );
      })}
    </Container>
  );
}

const CATEGORY_QUERY = gql`
  query CATEGORY_QUERY($category: String) {
    allProductCategories(where: { name_contains: $category }) {
      id
      name
      products(sortBy: order_ASC) {
        id
        name
        hide
        subtitle
        excerpt
        image {
          id
          originalFilename
          publicUrl
        }
      }
    }
  }
`;
