import React ,{Fragment} from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';


const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #00c9ff;
 
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color:#ff0066;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const  Accessibility=({ auth: { isAuthenticated, loading,user }, logout })=> {
  
    const authLinks = (
        <Fragment>
     
     <RegisterButton>  <a onClick={logout} href='signin'>
          Logout
        </a> </RegisterButton>
  
        </Fragment>
        );
  
  
  
  
  
        const guestLinks = (
            <Fragment>
         
            
         <RegisterButton> <Link href='/signup'>Register</Link></RegisterButton>
      <LoginButton><Link href='/signin'>Login</Link></LoginButton>
              
            </Fragment>
            );
  
    return (
    <AccessibilityContainer>
       {
          <Fragment>
            
            {isAuthenticated && !loading ? authLinks:guestLinks}
          </Fragment>
        }
    </AccessibilityContainer>
  );
}

Accessibility.propTypes = {
   
    auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.auth.user,
  });

  
  export default connect(mapStateToProps, { logout })(Accessibility);
  