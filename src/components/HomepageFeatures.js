import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Versions History',
    Svg: require('../../static/img/version-history.svg').default,
    description: (
      <>
        Easy and quickly track whats new in the docs and system functionality.
      </>
    ),
  },
  {
    title: 'Essential Guides',
    Svg: require('../../static/img/user-manual-icon.svg').default,
    description: (
      <>
        This website provides easy-to-read guides and manuals to the all of the SW360 Backoffice functionality.
      </>
    ),
  },
  {
    title: 'Illustrated Manuals',
    Svg: require('../../static/img/product-manuals.svg').default,
    description: (
      <>
        User Manuals contains many images and gifs to understand flows and actions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
