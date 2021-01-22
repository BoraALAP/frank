import { Container } from "../components/layout/Container";
import Split from "../components/pageSpecific/products/Split";
import { PageTitle } from "../components/pageSpecific/products/PageTitle";

const CategoryTemplate = ({ pagetitle, links, products }) => {
  return (
    <Container space gap>
      <PageTitle title={pagetitle} links={links} padding />
      {products.map((product, index) => {
        const {
          title,
          subtitle,
          href,
          image,
          side = false,
          children,
        } = product;
        return (
          <Split
            title={title}
            subtitle={subtitle}
            href={href}
            image={image}
            side={side}
            key={index}
          >
            {children}
          </Split>
        );
      })}
    </Container>
  );
};

export default CategoryTemplate;
