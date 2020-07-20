import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home__Banner from '../components/Page__Home/Home__Banner/Home__Banner';
import Home__Trust from '../components/Page__Home/Home__Trust/Home__Trust';
import Home__Company from '../components/Page__Home/Home__Company/Home__Company';
import Home__Services__Roofing from '../components/Page__Home/Home__Services/Home__Services__Roofing';
import Home__Services__Siding from '../components/Page__Home/Home__Services/Home__Services__Siding';
import Home__Services__Gutters from '../components/Page__Home/Home__Services/Home__Services__Gutters';
import Home__Services__Insulation from '../components/Page__Home/Home__Services/Home__Services__Insulation';
import Home__Reviews from '../components/Page__Home/Home__Reviews/Home__Reviews';
import Home__Services__General from '../components/Page__Home/Home__Services/Home__Services__General';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="MDH Construction | Licensed General Contractor | Plymouth, MA"
        description="MDH Construction is a licensed general contractor in Plymouth, MA. Services include new construction, roofing, siding, gutter installation, Mass Save insulation, and more."
        canonicalLink="https://www.mdhconstruction.com/"
      />
      <Home__Banner className="bg-img-home" />
      <Home__Trust />
      <Home__Company />
      <Home__Reviews id="home-reviews-section" />
      <Home__Services__General />
      {/* <Home__Services__Roofing /> */}
      <Home__Services__Siding />
      <Home__Services__Gutters />
      <Home__Services__Insulation />
    </Layout>
  );
};

export default IndexPage;
