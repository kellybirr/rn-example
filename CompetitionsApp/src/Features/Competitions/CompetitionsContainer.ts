import {fetchCompetitions} from '@store/Competitions/actions';
import {getCompetitionsState} from '@store/Competitions/selectors';
import {RootState} from '@store/Root/RootState';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import CompetitionsScreen from './CompetitionsScreen';

const mapStateToProps = (state: RootState) => ({
  competitions: getCompetitionsState(state),
  loading: state.competitions.loading,
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
