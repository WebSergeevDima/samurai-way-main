import React from "react";
import './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfileAC} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: any) => {
                console.log('response: ', response);
                this.props.SetUserProfileAC(response.data);
            });
    }

    render() {
        return (
            <main>
                <Profile {...this.props} profile={this.props.profile} />
            </main>
        );
    }


};

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {SetUserProfileAC})(withUrlDataContainerComponent);