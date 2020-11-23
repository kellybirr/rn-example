import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {fetchCompetitions} from '@store/Competitions/actions';
import {getCompetitionsState} from '@store/Competitions/selectors';
import {RootState} from '@store/Root/RootState';
import CompetitionsScreen from './CompetitionsScreen';

const mapStateToProps = (state: RootState) => ({
  competitions: getCompetitionsState(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCompetitions: () => {
    dispatch(fetchCompetitions());
  },
});
const Competitions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompetitionsScreen);

export default Competitions;
