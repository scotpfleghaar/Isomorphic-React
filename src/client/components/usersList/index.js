import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUser() {
        if (this.props.users.users) {
            return this.props.users.users.map((userName, index)  => {
                return <li key={`${userName}-${index}`}>{userName}</li>
            })
        } else {
            return <div>loading....</div>
        }
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

function loadData(store) {
    store.dispatch(fetchUsers())
}

export { loadData };

export default connect(mapStateToProps, {fetchUsers})(UsersList);