import React from 'react';

import Helmet from 'react-helmet';

const About = () => (
  <div>
    <Helmet
      title='About'
      meta={[
        { name: 'description', content: 'Blog description' },
        { name: 'keywords', content: 'Blog, description, about' }
      ]}
    />
    Description of my blog...
  </div>
);


export default About;