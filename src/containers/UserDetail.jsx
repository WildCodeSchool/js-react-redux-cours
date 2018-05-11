import React from 'react';
import { connect } from 'react-redux';

const UserDetail = ({user}) => {
    return (
        <div className="UserDetail">
            {(!user) ? <div>Selectionner un utilisateur...</div> : <h2>{user.name}</h2>}
        </div>
    )
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);