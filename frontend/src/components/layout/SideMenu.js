import React from 'react'

import { SvcFlex } from 'components/atoms/Flex'

import { SvcLayoutMenuContent } from './MenuContent'

export const SvcLayoutSideMenu = () => (
  <SvcFlex
    display={{ xs: 'none', md: 'flex' }}
    width={{ _: 32, md: 300 }}
    marginRight={2}
    position="fixed"
  >
    <SvcLayoutMenuContent />
  </SvcFlex>
)
