import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import { svcTheme } from '../../../styles'

export const SvcLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    > div {
      background: ${svcTheme.palette.grey[300]};
    }
  }
`

SvcLink.defaultProps = {}
