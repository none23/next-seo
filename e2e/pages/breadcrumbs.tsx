import React from 'react';
import { BreadcrumbJsonLd } from 'next-seo';

export default () => (
  <>
    <h1>Breadcrumbs JSON-LD</h1>
    <nav>
      <ol>
        <li>
          <a href="https://example.com/books">Books</a>
        </li>
        <li>
          <a href="https://example.com/books/authors">Authors</a>
        </li>
        <li>
          <a href="https://example.com/books/annleckie">Ann Leckie</a>
        </li>
        <li>
          <a href="https://example.com/books/annleckie/ancillaryjustice">
            Ancillary Justice
          </a>
        </li>
      </ol>
    </nav>

    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Books',
          item: 'https://example.com/books',
        },
        {
          position: 2,
          name: 'Authors',
          item: 'https://example.com/books/authors',
        },
        {
          position: 3,
          name: 'Ann Leckie',
          item: 'https://example.com/books/authors/annleckie',
        },
        {
          position: 4,
          name: 'Ancillary Justice',
          item: 'https://example.com/books/authors/annleckie/ancillaryjustice',
        },
      ]}
    />
  </>
);
