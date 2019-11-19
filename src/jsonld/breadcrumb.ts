import createJsonLd from '../utils/createJsonld';

export interface ItemListElements {
  item: string;
  name: string;
  position: number;
}

export interface BreadCrumbJsonLdProps {
  itemListElements: ItemListElements[];
}

const buildBreadCrumbJsonLd = ({
  itemListElements = [],
}: BreadCrumbJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: itemListElements.map(({ position, item, name }) => ({
    '@type': 'ListItem',
    position,
    item: { '@id': item, name },
  })),
});

export default createJsonLd('jsonld-breadcrumbs', buildBreadCrumbJsonLd);
