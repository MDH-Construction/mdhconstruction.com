import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Layout/Header/Header';
import Privacy__Body from '../components/Page__Privacy/Privacy__Body';

const PrivacyPage = () => (
  <Layout>
    <SEO
      title="Privacy | 5-Star Reviews on Google, FB, HomeAdvisor"
      description="Privacy | Licensed General Contractor from Plymouth, MA"
      canonicalLink="https://www.mdhconstruction.com/privacy/"
    />
    <Header
      Tag="header"
      className="bg-img-page-top"
      fluid={imageDataHeader}
      hOne="Privacy"
      hTwo="Privacy"
      alt="Privacy"
    />
    <Privacy__Body />
  </Layout>
);

export default PrivacyPage;
