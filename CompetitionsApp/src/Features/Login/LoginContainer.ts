import {connect} from 'react-redux';
import LoginScreen from './LoginScreen';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

export default Login;