import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface ItemListElements {
  item: string;
  name: string;
  position: number;
}

export interface BreadCrumbJsonLdProps {
  itemListElements: ItemListElements[];
}

const BreadCrumbJsonLd: FC<BreadCrumbJsonLdProps> = ({
  itemListElements = [],
}) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements.map(({ position, item, name }) => ({
      '@type': 'ListItem',
      position,
      item: { '@id': item, name },
    })),
  };
  return <JsonLd keyProp="jsonld-breadcrumb" value={value} />;
};

export default BreadCrumbJsonLd;
