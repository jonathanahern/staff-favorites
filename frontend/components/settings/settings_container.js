import { connect } from "react-redux";
import { fetchSetting, updateSetting } from "../../actions/setting_actions";
import Settings from "./settings";

const mapStateToProps = (state) => ({
  settings: state.entities.settings,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSetting: (shopId) => dispatch(fetchSetting(shopId)),
  updateSetting: (setting) => dispatch(updateSetting(setting)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
