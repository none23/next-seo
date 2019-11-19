import React, { FC } from 'react';
import Head from 'next/head';

export interface JsonLdProps {
  keyProp: string;
  value: object;
}

const markup = (obj: object) => ({ __html: JSON.stringify(obj) });

const JsonLd: FC<JsonLdProps> = ({ keyProp, value }) => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={markup(value)}
      key={keyProp}
    />
  </Head>
);

export default JsonLd;
