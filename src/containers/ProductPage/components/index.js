import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const ProductPage = props => {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _page: 1,
        _limit: 10
      }
      await props.getList(params)
    }

    fetchProducts()
  }, [props])

  return (
    <div>
      {props.list.length > 0 &&
        props.list.map(product => <li key={product.id}>{product.name}</li>)}
    </div>
  )
}

ProductPage.propTypes = {
  getList: PropTypes.func,
  getDetail: PropTypes.func,
  list: PropTypes.array,
  detail: PropTypes.object
}

export default React.memo(ProductPage)
