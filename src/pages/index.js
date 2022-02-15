import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import DemandList from "../components/DemandList"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import SignupForm from "../components/SignupForm"

const modalStyles = smallScreen => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#e6dba9',
    boxShadow: '0px 2px 10px 2px rgba(0, 0, 0, 0.4)',
    padding: 0,
    borderRadius: 2,
    border: 'none',
    width: smallScreen ? 'inherit' : '30rem',
  },
  header: {
    width: '100%',
    padding: smallScreen ? '1rem' : '1rem 2.5rem',
    backgroundColor: '#c73a26',
    color: '#e6dba9',
  },
  body: {
    padding: '2rem 2rem 1rem 2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
});

const IndexPage = () => {
  const [ show, setShow ] = useState(false);
  let mediaMatch = {};
  if (typeof window !== 'undefined'){
    mediaMatch = window.matchMedia('(max-width: 534px)');
  }
  const [matches, setMatches] = useState(mediaMatch.matches);
  
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  
  return (
    <Layout>
      <Seo title="May Day Strike" />
      <div style={{ marginBottom: '3rem' }}>
        <h2>Who We Are</h2>
        <p>
          May Day Strike is a grassroots movement focused on establishing economic
          security, dignity, and fairness for workers of every nationality, race,
          and political affiliation.
        </p>
        <p>
          May 1st kicks off a series of direct action events supporting workers everywhere who are organizing for better conditions and demanding basic human rights. These actions will include a wave of protests, economic strikes, debt strikes, and union action <a href="https://twitter.com/search?q=%23UntilDemandsAreMet&src=typed_query&f=top">#UntilDemandsAreMet</a>!
        </p>
        <p>What are we asking for, exactly?</p>
      </div>
      <DemandList />
      <p>
        Join us on Discord and social media to become part of the new era of labor
        organization in the United States and across the globe.
      </p>
      <p>
        Sign up for the May Day Newsletter to stay informed about progress, requests, and future events!
      </p>
      <div style={{ width: '100%' }}>
        <button
          style={{ margin: '0 auto', display: 'block' }}
          onClick={() => setShow(true)}
        >
          Sign Up!
        </button>
      </div>
      

      <Modal
        isOpen={show}
        onAfterOpen={null}
        onRequestClose={() => setShow(false)}
        style={modalStyles(matches)}
        contentLabel="Sign Up for the Newsletter"
        shouldCloseOnOverlayClick={false}
      >
        <div style={modalStyles(matches).header}>
          <h3 style={{ marginBottom: 0, display: 'inline' }}>
            Sign Up for the Newsletter
          </h3>
          <span
            onClick={() => setShow(false)}
            style={{ float: 'right', color: '#2A2B2B', fontSize: 22 }}
          >
              <FontAwesomeIcon icon={faTimes} />
            </span>
        </div>
        <div style={modalStyles(matches).body}>
          <SignupForm />
        </div>
      </Modal>
    </Layout>
  );
}

export default IndexPage
