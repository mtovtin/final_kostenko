import React, { Component } from "react";

export default class EmbedSocialWidget extends Component {
    render(){
        return (
<div className="embedsocial-hashtag" data-ref={this.props.refId}></div>
        );
    }



componentDidMount() {
    (function (d, s, id) {
        var js;
        if (d.getElementById(id)) {
            return;
        }
        js=d.createElement(s);
        js.id = id;
        js.src = "https://embedsocial.com/cdn/ht.js";
        d.getElementsByTagName("head")[0].appendChild(js);
    }) (document, "script", "EmbedSocialReviewsScript");
    }
}




