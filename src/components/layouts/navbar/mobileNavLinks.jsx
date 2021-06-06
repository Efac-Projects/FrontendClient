import React, { useState, Fragment } from "react";
import styled from "styled-components";
import  Accessibility  from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color:#gggg;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position:absolute;
  top: 60px;
  left: 0;
  z-index:100;

  align-items: center;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #0a3185;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  &:hover {
    background-color:  #00c9ff;
    color:#fff
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;


`;

const Marginer = styled.div`
  height: 2em;
`;

const MobileNavLinks=({ auth: { isAuthenticated, loading,user } })=> {
  const [isOpen, setOpen] = useState(false);

  const authLinks = (
    <Fragment>
 
      <LinkItem>
        <Link href="/index">Home</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/about">About us</Link>
      </LinkItem>

      <LinkItem>
        <Link href='/businessess'>Make Appointment</Link>
      </LinkItem>
      <LinkItem>
        <Link href='/contactus'>Contact Us</Link>
      </LinkItem>
      <LinkItem>
          <Link href='/count'>Check Crowd</Link>
        </LinkItem>
    </Fragment>
    );


    const adminLinks = (
      <Fragment>
   
        <LinkItem>
          <Link href='/adminHome'>Dashboard</Link>
        </LinkItem>

      </Fragment>
      );





      const guestLinks = (
          <Fragment>
       
            <LinkItem>
              <Link href="/index">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link href="/about">About us</Link>
            </LinkItem>
    
            <LinkItem>
              <Link href='/businessess'>Make Appointment</Link>
            </LinkItem>
            <LinkItem>
              <Link href='/contactus'>Contact Us</Link>
            </LinkItem>
            <LinkItem>
              <Link href='/map'>Map</Link>
            </LinkItem>
            <LinkItem>
              <Link href='/business/signup'> Signup-Business</Link>
            </LinkItem>
    
          </Fragment>
          );






  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
         {
          <Fragment>
            
            {isAuthenticated && !loading ? ((user.userRole=='Admin') ? adminLinks:authLinks):guestLinks}
          </Fragment>
        }
          <Marginer />
          <Accessibility   />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
MobileNavLinks.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.auth.user,
  });
  
  export default connect(mapStateToProps)(MobileNavLinks);
  