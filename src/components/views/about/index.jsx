import React from 'react';

import Helmet from 'react-helmet';

const About = () => (
  <div>
    <h3>Описание блога</h3>
    <Helmet
      title='About'
      meta={[
        { name: 'description', content: 'Blog description' },
        { name: 'keywords', content: 'Blog, description, about' }
      ]}
    />
  </div>
);


export default About;