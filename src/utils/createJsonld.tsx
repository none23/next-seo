import React from 'react';
import Head from 'next/head';

const markup = (data: object) => ({
  __html: JSON.stringify(data),
});

type KeyProp<Props> = string | ((props: Props) => string);

type BuildJson<Props, Result = object> = (props: Props) => Result;

function createJsonLd<Props extends object>(
  keyProp: KeyProp<Props>,
  buildJson: BuildJson<Props>,
) {
  return (props: Props): React.ReactElement<typeof Head> => {
    const key = typeof keyProp === 'function' ? keyProp(props) : keyProp;
    return (
      <Head>
        <script
          type="application/ld+json"
          key={key}
          dangerouslySetInnerHTML={markup(buildJson(props))}
        />
      </Head>
    );
  };
}

export default createJsonLd;
