import React, {Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProfiles} from '../../../actions/businessprofile'
import ProfileItem from './ProfileItem'




  // Container Box
  const ContainerBox = ({getProfiles,auth,profile:{profiles,loading}}) => {
    
    useEffect(()=>{
      getProfiles()
      },[getProfiles])
    
    return (
      <Fragment>
 {loading ? <h4>Loading...</h4>:
 <Fragment>
   <h1 className='large'> </h1>
   </Fragment>}
   <div className='card' >
        {profiles.length>0 ?(
                profiles.map(profile=>(
                    <ProfileItem key={profile._id} profile={profile}/>
                ))
            ):(
              <div> <h4 className='text-2xl text-red-600 text-center'>No Profiles found</h4></div>
           
            )}
        </div>

      </Fragment>
    );
  };

  //-------

ContainerBox.propTypes = {
  getProfiles:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired,
  }
  
  const mapStateToProps=state=>({
    auth:state.auth,
      profile:state.profile
  })
  
  export default connect(mapStateToProps,{getProfiles}) (ContainerBox)