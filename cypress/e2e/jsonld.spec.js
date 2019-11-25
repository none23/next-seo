import { assertSchema } from '@cypress/schema-tools';
import schemas from '../schemas';

describe('Article', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/article');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Article', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/article');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Article',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://example.com/article',
          },
          headline: 'Article headline',
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
          datePublished: '2015-02-05T08:00:00+08:00',
          dateModified: '2015-02-05T09:00:00+08:00',
          author: {
            '@type': 'Person',
            name: 'Jane Blogs',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Gary Meehan',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.example.com/photos/logo.jpg',
            },
          },
          description: 'This is a mighty good description of this article.',
        });
      });
  });
});

describe('Breadcrumb', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/breadcrumbs');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Breadcrumb', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/breadcrumbs');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://example.com/books',
                name: 'Books',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': 'https://example.com/books/authors',
                name: 'Authors',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': 'https://example.com/books/authors/annleckie',
                name: 'Ann Leckie',
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@id':
                  'https://example.com/books/authors/annleckie/ancillaryjustice',
                name: 'Ancillary Justice',
              },
            },
          ],
        });
      });
  });
});

describe('Blog', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/blog');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag =>
        assertSchema(schemas)('Blog', '1.0.0')(JSON.parse(tag.innerText)),
      );
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/blog');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Blog',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://example.com/blog',
          },
          headline: 'Blog headline',
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
          datePublished: '2015-02-05T08:00:00+08:00',
          dateModified: '2015-02-05T09:00:00+08:00',
          author: {
            '@type': 'Person',
            name: 'Jane Blogs',
          },
          description: 'This is a mighty good description of this blog.',
        });
      });
  });
});

describe('Course', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/course');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Course', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/course');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Course',
          name: 'Course Name',
          description: 'Course description goes right here',
          provider: {
            '@type': 'Organization',
            name: 'Course Provider',
            sameAs: 'https//www.example.com/provider',
          },
        });
      });
  });
});

describe('Local Business', () => {
  it('Document contains a script tag with type="application/ld+json", and JSON-LD content', () => {
    cy.visit('http://localhost:3000/local-business');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Local Business', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/local-business');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Store',
          '@id': 'http://davesdeptstore.example.com',
          name: "Dave's Department Store",
          description: "Dave's latest department store in San Jose, now open",
          url:
            'http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427',
          telephone: '+14088717984',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1600 Saratoga Ave',
            addressLocality: 'San Jose',
            addressRegion: 'CA',
            postalCode: '95129',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '37.293058',
            longitude: '-121.988331',
          },
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
        });
      });
  });

  it('If page has multiple stores, document contains a script tag with type="application/ld+json", and JSON-LD content for every store on the page', () => {
    cy.visit('http://localhost:3000/local-businesses');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 2)
      .spread((first, second) => {
        assertSchema(schemas)('Local Business', '1.0.0')(
          JSON.parse(first.innerHTML),
        );
        assertSchema(schemas)('Local Business', '1.0.0')(
          JSON.parse(second.innerHTML),
        );
      });
  });
});

describe('Logo', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/logo');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Logo', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/logo');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Organization',
          url: 'http://www.your-site.com',
          logo: 'http://www.your-site.com/images/logo.jpg',
        });
      });
  });
});

describe('Product', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/product');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Product', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/product');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org/',
          '@type': 'Product',
          name: 'Executive Anvil',
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
          description:
            "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
          mpn: '925872',
          brand: {
            '@type': 'Thing',
            name: 'ACME',
          },
          review: [
            {
              '@type': 'Review',
              author: 'Jim',
              datePublished: '2017-01-06T03:37:40Z',
              reviewBody:
                'This is my favorite product yet! Thanks Nate for the example products and reviews.',
              name: 'So awesome!!!',
              reviewRating: {
                '@type': 'Rating',
                bestRating: '5',
                ratingValue: '5',
                worstRating: '1',
              },
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.4',
            reviewCount: '89',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '119.99',
            priceValidUntil: '2020-11-05',
            itemCondition: 'http://schema.org/UsedCondition',
            availability: 'http://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Executive Objects',
            },
          },
        });
      });
  });
});

describe('Social Profile', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/profile');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Social Profile', '1.0.0')(jsonLD);
      });
  });

  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/profile');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Social Profile', '1.0.0')(jsonLD);
      });
  });

  it('If page has multiple profiles, document contains a script tag with type="application/ld+json", and JSON-LD content for every product on the page', () => {
    cy.visit('http://localhost:3000/profiles');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 2)
      .spread((first, second) => {
        assertSchema(schemas)('Social Profile', '1.0.0')(
          JSON.parse(first.innerHTML),
        );
        assertSchema(schemas)('Social Profile', '1.0.0')(
          JSON.parse(second.innerHTML),
        );
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/profile');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: 'your name',
          url: 'http://www.your-site.com',
          sameAs: [
            'http://www.facebook.com/your-profile',
            'http://instagram.com/yourProfile',
            'http://www.linkedin.com/in/yourprofile',
            'http://plus.google.com/your_profile',
          ],
        });
      });
  });
});

describe('CorporateContact', () => {
  it('Injects a script tag with type="application/ld+json", that contains JSON-LD', () => {
    cy.visit('http://localhost:3000/corporate-contact');
    cy.get('script[type="application/ld+json"]')
      .should('have.length', 1)
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        assertSchema(schemas)('Corporate Contact', '1.0.0')(jsonLD);
      });
  });

  it('Injected JSON-LD matches expected schema', () => {
    cy.visit('http://localhost:3000/corporate-contact');
    cy.get('script[type="application/ld+json"]')
      .first()
      .root(tag => {
        const jsonLD = JSON.parse(tag.innerHTML);
        expect(jsonLD).to.deep.equal({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'http://www.your-company-site.com',
          logo: 'http://www.example.com/logo.png',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+1-401-555-1212',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: ['English', 'Spanish', 'French'],
            },
            {
              '@type': 'ContactPoint',
              telephone: '+1-877-746-0909',
              contactType: 'customer service',
              contactOption: 'TollFree',
              availableLanguage: 'English',
            },
            {
              '@type': 'ContactPoint',
              telephone: '+1-877-453-1304',
              contactType: 'technical support',
              contactOption: 'TollFree',
              areaServed: ['US', 'CA'],
              availableLanguage: ['English', 'French'],
            },
          ],
        });
      });
  });
});
