import React from 'react'

import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

import { SvcBox } from 'components/atoms/Box'
import { SvcFlex } from 'components/atoms/Flex'

import { SvcLayoutSideMenu } from './SideMenu'
import { SvcLayoutToolbar } from './Toolbar'

export const SvcLayout = ({ children }) => {
  return (
    <SvcBox bgcolor="#eee">
      <SvcLayoutToolbar />
      <SvcFlex mt={16} py={8} px={10} minHeight="calc(100vh - 64px)">
        <SvcLayoutSideMenu />
        <Container maxWidth="md">{children}</Container>
      </SvcFlex>
    </SvcBox>
  )
}

SvcLayout.propTypes = {
  children: PropTypes.node
}
