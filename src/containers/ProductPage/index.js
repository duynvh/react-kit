import { connect } from 'react-redux';
import { getList, getDetail } from "./meta/actions";
import { selectList, selectDetail, selectIsProductFetching } from "./meta/selectors";
import { createStructuredSelector } from 'reselect';
import ProductPage from './components';

const mapStateToProps = createStructuredSelector({
  list: state => selectList(state),
  detail: state => selectDetail(state),
  isFetching: state => selectIsProductFetching(state),
});

const mapDispatchToProps = dispatch => ({
  getList: params => dispatch(getList(params)),
  getDetail: id => dispatch(getDetail(id)),
});

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);

export default ProductContainer;