import { useCallback, useState } from 'react'

export const useDisclosure = () => {
  const [open, setOpen] = useState(false)

  const onOpen = useCallback(() => setOpen(true), [])

  const onClose = useCallback(() => setOpen(false), [])

  return {
    onOpen,
    onClose,
    open
  }
}
