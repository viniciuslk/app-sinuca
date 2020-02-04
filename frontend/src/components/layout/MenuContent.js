import React, { useCallback } from 'react'

import styled from 'styled-components'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import GroupIcon from '@material-ui/icons/Group'
import PersonIcon from '@material-ui/icons/Person'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'

import { SvcLink } from 'components/atoms/Link'

import { menuRoutes } from '../../constants'

const StdList = styled(List)`
  flex: 1;
`

const StdListItem = styled(ListItem)`
  border-radius: 50px !important;
`

export const SvcLayoutMenuContent = () => {
  const configureIcon = useCallback(icon => {
    switch (icon) {
      case 'person':
        return <PersonIcon />
      case 'group':
        return <GroupIcon />
      case 'championship':
        return <EmojiEventsIcon />
      default:
        return <PriorityHighIcon />
    }
  }, [])

  return (
    <StdList>
      {menuRoutes.map((item, index) => (
        <SvcLink to={item.path} key={index}>
          <StdListItem button>
            <ListItemIcon>{configureIcon(item.icon)}</ListItemIcon>
            <ListItemText primary={item.name} />
          </StdListItem>
        </SvcLink>
      ))}
    </StdList>
  )
}
