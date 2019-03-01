import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { compose, ChildProps } from 'react-apollo';
import { LOGOUT, Mutation, MutationPayload } from '../graphql/mutations/logout';


interface IParams {

}

interface Props extends RouteComponentProps<IParams>, ChildProps<Mutation, MutationPayload> {

}

class Header extends Component<Props> {

  logout = async () => {
    const data = await this.props.logout();
    const result: any = {...data};
    const { logout } = result.data;
    if (logout) {
      this.props.history.push('/signin');
    }
  }

  render() {
    return (
      <div className="header">
        <div>
          <h3>Cauldrom</h3>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__item">Welcome, Username</li>
            <li className="header__nav__item">
              <span className="header__nav__link" onClick={this.logout}>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export const MainHeader = compose(
  LOGOUT,
)(Header);