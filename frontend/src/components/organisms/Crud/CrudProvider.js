import { useRef, useMemo, useCallback } from 'react'
import { useParams, useHistory, useRouteMatch } from 'react-router-dom'

import { createContainer } from 'hooks'

const useCrud = ({ basePath } = {}) => {
  const listRef = useRef()
  const params = useParams()
  const history = useHistory()

  const basePathWithParams = Object.keys(params).reduce((prev, current) => {
    return prev.replace(`:${current}`, params[current])
  }, basePath)

  const match = useRouteMatch(`${basePathWithParams}/:path`)

  const isOpen = useMemo(() => {
    return !!match
  }, [match])

  const onClose = useCallback(
    (params = {}) => {
      history.push(basePathWithParams, params)
    },
    [basePathWithParams, history]
  )

  const onCreate = useCallback(
    (params = {}) => {
      history.push(`${basePathWithParams}/novo`, params)
    },
    [basePathWithParams, history]
  )

  const onEdit = useCallback(
    (item, params = {}) => {
      setTimeout(() => {
        history.push(`${basePathWithParams}/${item.id}`, params)
      }, 300)
    },
    [basePathWithParams, history]
  )

  return {
    basePath,
    basePathWithParams,
    isOpen,
    onClose,
    onCreate,
    onEdit,
    listRef
  }
}

export const [
  CrudProvider,
  useCrudBasePath,
  useCrudBasePathWithParams,
  useCrudIsOpen,
  useCrudOnClose,
  useCrudOnCreate,
  useCrudOnEdit
] = createContainer(
  useCrud,
  value => value.basePath,
  value => value.basePathWithParams,
  value => value.isOpen,
  value => value.onClose,
  value => value.onCreate,
  value => value.onEdit
)
