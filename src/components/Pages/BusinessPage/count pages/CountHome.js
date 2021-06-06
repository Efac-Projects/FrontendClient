import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Count from './Count'
import Count2 from './Count2'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const CountHome = () => {
    return (
    
    <div className='max-w-5xl px-5 py-5 mx-auto text-center '>

<Count/>
<Count2/>


    </div>
    )
}

CountHome.propTypes = propTypes;
CountHome.defaultProps = defaultProps;
// #endregion

export default CountHome;