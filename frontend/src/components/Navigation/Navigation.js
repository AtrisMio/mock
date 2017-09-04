/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import Button from '../Material-Design/Button/Button';

class Navigation extends React.Component {
    render() {
        return (
            <div className={s.root} role="navigation">
                <Button type={'raised'} ripple >
                    About
                </Button>
                <Link className={s.link} to="/contact">
                    Contact
                </Link>
                <span className={s.spacer}> | </span>
                <Link className={s.link} to="/login">
                    Log in
                </Link>
                <span className={s.spacer}>or</span>
                <Link className={cx(s.link, s.highlight)} to="/register">
                    Sign up
                </Link>
            </div>
        );
    }
}

export default withStyles(s)(Navigation);
