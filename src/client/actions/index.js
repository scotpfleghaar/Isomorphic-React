// import db from '../../helpers/firestore';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async dispatch => {
    // await db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //          dispatch({
    //             type: FETCH_USERS,
    //             payload: doc.data()
    //         })
    //     });
    // }).catch(err => {
    //     console.log('Error getting documents', err);
    // });
};
