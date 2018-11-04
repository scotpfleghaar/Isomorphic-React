import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions';

class UsersList extends Component {
    componentDidMount() {
        //this.props.fetchUsers();
    }

    renderUser() {
        return this.props.users.map(userName => {
            return <li>{userName}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>List of users:</h3>
                <ul>
                    {this.renderUser()}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps, {fetchUsers})(UsersList);