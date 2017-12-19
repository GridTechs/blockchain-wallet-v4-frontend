import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RD from 'blockchain-wallet-v4/src/redux/remoteData'

import { actions, selectors } from 'data'
import FiatDisplay from './template'
import Error from './template_error'
import Loading from './template_loading'

class FiatDisplayContainer extends React.Component {
  componentWillMount () {
    switch (this.props.coin) {
      case 'BTC': return this.props.bitcoinActions.fetchRates()
      case 'ETH': return this.props.ethereumActions.fetchRates()
    }
  }

  render () {
    const { fiatDisplay, ...rest } = this.props

    return RD.caseOf(fiatDisplay.value, {
      Success: (value) => <FiatDisplay {...rest}>{value}</FiatDisplay>,
      Failed: (message) => <Error>{message}</Error>,
      _: () => <Loading />
    })
  }
}

FiatDisplayContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  coin: PropTypes.oneOf(['BTC', 'ETH']).isRequired
}

const mapStateToProps = (state, ownProps) => ({
  fiatDisplay: selectors.modules.fiatDisplay.getFiatDisplay(state, ownProps.coin, ownProps.children)
})

const mapDispatchToProps = dispatch => ({
  bitcoinActions: bindActionCreators(actions.core.data.bitcoin, dispatch),
  ethereumActions: bindActionCreators(actions.core.data.ethereum, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FiatDisplayContainer)
