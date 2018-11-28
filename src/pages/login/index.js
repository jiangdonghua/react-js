import React, {PureComponent} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import {withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Login extends PureComponent {
    render() {
        const {login} = this.props;
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={()=>this.props.goLogin(this.account.value,this.password.value)}>登录</Button>
                        {/*<Input placeholder='账号' ref='account'/>*/}
                        {/*<Input placeholder='密码' type='password' ref='password'/>*/}
                        {/*<Button onClick={()=>this.props.goLogin(this.refs.account.value,this.refs.password.value)}>登录</Button>*/}
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }

    }

}
const mapState = (state) => ({
    login: state.getIn(['login', 'loginStatus'])
});
const mapDispatch = (dispatch) => ({
    goLogin(account,password) {
        dispatch(actionCreators.login(account,password))
    }
});

export default connect(mapState, mapDispatch)(withRouter(Login));