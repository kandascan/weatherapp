import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AlertComponent extends Component {
    render() {
        const { error } = this.props;
        return (
            <div>
                {error.isShow ? (<div className='alert'>{error.message}</div>) : (null)} 
            </div>
        )
    }
}

AlertComponent.propType = {
    error: PropTypes.object.isRequired
}
  
const mapStateToProps = (state) => ({
    error: state.error
});

export default connect(mapStateToProps, { })(AlertComponent);
