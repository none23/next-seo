import React from 'react';
import Head from 'next/head';

const markup = (data: object) => ({
  __html: JSON.stringify(
    data,
    null,
    process.env.NODE_ENV === 'production' ? 2 : 0,
  ),
});

type KeyProp<Props> = string | ((props: Props) => string);

type BuildJson<Props, Result = object> = (props: Props) => Result;

function createJsonLd<Props extends object>(
  keyProp: KeyProp<Props>,
  buildJson: BuildJson<Props>,
) {
  return (props: Props): React.ReactElement<typeof Head> => {
    const key = typeof keyProp === 'function' ? keyProp(props) : keyProp;
    const jsonLd = React.useMemo(() => markup(buildJson(props)), [props]);
    return (
      <Head>
        <script
          type="application/ld+json"
          key={key}
          dangerouslySetInnerHTML={jsonLd}
        />
      </Head>
    );
  };
}

export default createJsonLd;
