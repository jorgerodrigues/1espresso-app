import React, {useRef} from 'react';
import {auth, db} from '../firebase'
import {connect} from 'react-redux';
import {errorMessageAdded} from '../../actions'
import ErrorOrSuccessMessage from '../utils/ErrorOrSuccessMessage'


const DeleteAccount = (props) => {
    const emailField = useRef();

    const deleteUserRecipes = async () => {
        await db.collection('recipes').where('UserId', '==', auth.currentUser.uid).get().then((snapshot) => {
            snapshot.forEach((doc)=> {
                doc.ref.delete();
            })})
    }

    const deleteUserProfile = async () => {
        await deleteUserRecipes();
        db.collection('users').doc(props.isLoggedIn.user.uid).delete()
        try {
            auth.currentUser.delete();
            console.log('The user was deleted');
        } catch(err) {
                props.errorMessageAdded({
                    type: 'errorMessage',
                    display: "DeleteAccount",
                    message: err,
                })
            }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkEmailMatchAccount();
    }

    const checkEmailMatchAccount = () => {
        const userEmail = auth.currentUser.email
        console.log(userEmail)
        if(userEmail === emailField.current.value) {
            deleteUserProfile();
        } else {
            props.errorMessageAdded({
                type: 'errorMessage',
                display: 'DeleteAccount',
                message: "The email you entered does not match the email from your account"
            })
        }
    }


    return (
    
    <div className='recipeAndFeedback' onSubmit={(e)=> {handleFormSubmit(e)}}>
        <h3>Delete your account</h3>
        <form>
            <label className='feedbackLabel' >
                If you want to delete your account, please enter your email in the field below:
            </label>
            <div><input className='textField' type='email' ref={emailField}></input></div>
            <div>{props.errorMessage ? <ErrorOrSuccessMessage type='errorMessage' message={props.errorMessage.message}/> : "" }</div>
        </form>
        <button className='secondaryButton' onClick={()=>{checkEmailMatchAccount()}}>Delete my account!</button>
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
      errorMessage: state.errorMessage,
    };
  };

export default connect(mapStateToProps, {errorMessageAdded})(DeleteAccount) ;