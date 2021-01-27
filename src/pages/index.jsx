import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/common/SEO';
import Banner from '../components/views/home/Banner';
import Trust from '../components/views/home/Trust';
import Company from '../components/views/home/Company';
import ReviewsFranklin from '../components/views/home/reviews/Franklin';
import ReviewsInsulation from '../components/views/home/reviews/Insulation';
import ReviewsJorg from '../components/views/home/reviews/Jorg';
import ReviewsLynne from '../components/views/home/reviews/Lynne';
import Services__General from '../components/views/home/services/General';
import Services__Gutters from '../components/views/home/services/Gutters';
import Services__Insulation from '../components/views/home/services/Insulation';
import Services__Other from '../components/views/home/services/Other';
import ServicesCTA from '../components/views/home/ServicesCTA';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="MDH Construction | Licensed General Contractor | Plymouth, MA"
        description="MDH Construction is a licensed general contractor in Plymouth, MA, servicing gutters, insulation, decks, remodels, additions. Call today for your FREE estimate!"
        canonicalLink="https://www.mdhconstruction.com/"
      />
      <Banner className="bg-img-home" />
      <Trust />
      <Company />
      <ReviewsLynne />
      <Services__General />
      <ServicesCTA
        hTwo="Are You Interested In Our General Contracting Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Free Quote"
      />
      <ReviewsJorg />
      <Services__Gutters />
      <ServicesCTA
        hTwo="Are You Interested In Our Gutter Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Gutter Quote"
      />
      <ReviewsInsulation />
      <Services__Insulation />
      <ServicesCTA
        hTwo="Are You Interested In Our Insulation Services?"
        btnOutlineLabel="See All Of Our Services"
        btnSolidLabel="Get An Insulation Quote"
      />
      <ReviewsFranklin />
      <Services__Other />
      <ServicesCTA
        hTwo="Are You Interested In Our Home Improvement Services?"
        btnOutlineLabel="See All Services"
        btnSolidLabel="Get A Free Quote"
      />
    </Layout>
  );
};

export default IndexPage;
