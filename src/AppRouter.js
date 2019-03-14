import React, {Component} from "react";
import MainRoute from "./routes/mainroutes";
import {withRouter} from "react-router-dom";
import Navigation from "./navigation/navigation"

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <Navigation postSignout={this.postSignout}/>
                <MainRoute/>
            </div>
        )
    }
}

export default withRouter(AppAjax)