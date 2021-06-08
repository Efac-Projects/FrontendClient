import React,{Fragment} from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

 
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #0a3185;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
   
    color:#cc0066
  }

`;

const NavLinks=({ auth: { isAuthenticated, loading,user } })=> {

    const authLinks = (
      <Fragment>
   
        <LinkItem>
          <Link href="/">Home</Link>
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
                <Link href="/">Home</Link>
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
      <LinksWrapper>
      {
          <Fragment>
            
            {isAuthenticated && !loading ? ((user.userRole=='Admin') ? adminLinks:authLinks):guestLinks}
          </Fragment>
        }
      </LinksWrapper>
    </NavLinksContainer>
  );

}
NavLinks.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.auth.user
  });

export default connect(mapStateToProps)(NavLinks);