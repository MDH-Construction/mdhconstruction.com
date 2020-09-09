import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home__Banner from '../components/Page__Home/Home__Banner/Home__Banner';
import Home__Trust from '../components/Page__Home/Home__Trust/Home__Trust';
import Home__Company from '../components/Page__Home/Home__Company/Home__Company';
import Home__ReviewsLynne from '../components/Page__Home/Home__Reviews/Home__ReviewsLynne';
import Home__Services__General from '../components/Page__Home/Home__Services/Home__Services__General';
import Home__ReviewsJorg from '../components/Page__Home/Home__Reviews/Home__ReviewsJorg';
import Home__Services__Gutters from '../components/Page__Home/Home__Services/Home__Services__Gutters';
import Home__ReviewsInsulation from '../components/Page__Home/Home__Reviews/Home__ReviewsInsulation';
import Home__Services__Insulation from '../components/Page__Home/Home__Services/Home__Services__Insulation';
import Home__Services__Other from '../components/Page__Home/Home__Services/Home__Services__Other';
import Home__ServicesCTA from '../components/Page__Home/Home__ServicesCTA/Home__ServicesCTA';
import Home__ReviewsFranklin from '../components/Page__Home/Home__Reviews/Home__ReviewsFranklin';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="MDH Construction | Licensed General Contractor | Plymouth, MA"
        description="MDH Construction is a licensed general contractor in Plymouth, MA, servicing gutters, insulation, decks, remodels, additions. Call today for your FREE estimate!"
        canonicalLink="https://www.mdhconstruction.com/"
      />
      <Home__Banner className="bg-img-home" />
      <Home__Trust />
      <Home__Company />
      <Home__ReviewsLynne />
      <Home__Services__General />
      <Home__ServicesCTA
        hTwo="Are You Interested In Our General Contracting Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Free Quote"
      />
      <Home__ReviewsJorg />
      <Home__Services__Gutters />
      <Home__ServicesCTA
        hTwo="Are You Interested In Our Gutter Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Gutter Quote"
      />
      <Home__ReviewsInsulation />
      <Home__Services__Insulation />
      <Home__ServicesCTA
        hTwo="Are You Interested In Our Insulation Services?"
        btnOutlineLabel="See All Of Our Services"
        btnSolidLabel="Get An Insulation Quote"
      />
      <Home__ReviewsFranklin />
      <Home__Services__Other />
      <Home__ServicesCTA
        hTwo="Are You Interested In Our Home Improvement Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Free Quote"
      />
    </Layout>
  );
};

export default IndexPage;
