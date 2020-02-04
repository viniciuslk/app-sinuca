import styled from 'styled-components'

import { display, compose } from '@material-ui/system'

import { SvcBox } from '../Box'

export const SvcFlex = styled(SvcBox)`
  ${compose(display)};
`

SvcFlex.defaultProps = {
  display: 'flex'
}
