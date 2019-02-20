import React , {Component} from 'react'

export default class extends Component{

    render(){
        return(
            <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="company_profile_info">
              <div className="company-up-info">
                <img src={this.props.Image} alt="" />
                <h3>{this.props.FacultyName}</h3>
                <h4>{this.props.FacultyExperience} Exp.</h4>
                <ul>
                  <li>
                    <a href="#" title="" className="follow">
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" className="message-us">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        )
    }
}