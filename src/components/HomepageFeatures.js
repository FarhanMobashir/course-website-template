import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Beginner Friendly',
    Svg: require('../../static/img/beginner.svg').default,
    description: (
      <>
        This course is specially crafted for beginners having no or very low knowledge in technology and computers.
      </>
    ),
  },
  {
    title: 'Easy to Understand Notes',
    Svg: require('../../static/img/notes.svg').default,
    description: (
      <>
        The notes of this course is very descriptive and easy to understand and will help you to learn things very easily.
      </>
    ),
  },
  {
    title: 'Start your Journey to Programming',
    Svg: require('../../static/img/virtual-reality.svg').default,
    description: (
      <>
        After taking this course you will learn about computational thinking , the meaning of programming at meta level. 
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
