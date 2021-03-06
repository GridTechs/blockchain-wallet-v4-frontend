import { Button, Text } from 'blockchain-info-components'
import { Container, Row } from 'components/WhatsNew'
import { FormattedMessage } from 'react-intl'
import { LinkContainer } from 'react-router-bootstrap'
import media from 'services/ResponsiveService'
import React from 'react'
import styled from 'styled-components'

const DarkText = styled(Text).attrs({
  color: 'gray-5',
  size: '16px',
  weight: 300
})`
  display: inline;
  ${media.laptop`
    display: ${props => (props.hideOnMobile ? 'none' : 'inline')};
  `};
`
const TellMeMoreButton = styled(Button).attrs({
  nature: 'primary',
  fullwidth: true
})`
  font-weight: 500;
  ${media.laptop`
    width: 100%;
  `};
`

export const Borrow = () => (
  <Container>
    <Row marginBottom='10px'>
      <Text color='blue900' size='24px' weight={600}>
        <FormattedMessage
          defaultMessage='Borrow USD Digital Today'
          id='layouts.wallet.trayright.whatsnew.whatsnewcontent.borrow'
        />
      </Text>
    </Row>
    <Row marginBottom='24px'>
      <DarkText size='14px'>
        <FormattedMessage
          defaultMessage='March 2020'
          id='layouts.wallet.trayright.whatsnew.whatsnewcontent.borrow.March2020'
        />
      </DarkText>
    </Row>
    <Row marginBottom='24px'>
      <DarkText>
        <FormattedMessage
          defaultMessage='Blockchain.com now lets you borrow USD Digital directly from your Blockchain Wallet with crypto as collateral.'
          id='layouts.wallet.trayright.whatsnew.whatsnewcontent.borrow.content'
        />
      </DarkText>
    </Row>
    <Row>
      <LinkContainer to='/borrow'>
        <TellMeMoreButton>
          <FormattedMessage
            id='layouts.wallet.trayright.whatsnew.whatsnewcontent.borrow.tellmemore'
            defaultMessage='Tell Me More'
          />
        </TellMeMoreButton>
      </LinkContainer>
    </Row>
  </Container>
)

export default Borrow
