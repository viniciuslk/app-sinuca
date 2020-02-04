/* eslint-disable react/prop-types */
import React, { useContext, createContext } from 'react'

const createUseContext = context => {
  return () => {
    const value = useContext(context)

    if (!value) {
      console.warn('[useContainer] Component not wrapped within a Provider.')
    }

    return value
  }
}

export const createContainer = (useValue, ...splitValues) => {
  const Context = createContext()

  const Provider = props => {
    const value = useValue(props)

    const memoizedValue = value
    return (
      <Context.Provider value={memoizedValue}>
        {props.children}
      </Context.Provider>
    )
  }

  const useContainer = createUseContext(Context)

  useContainer.Context = Context
  useContainer.Provider = Provider

  const tuple = []

  if (!splitValues.length) {
    tuple.push(Provider, createUseContext(Context))
  } else {
    const contexts = []

    const SplitProvider = props => {
      const value = useValue(props)
      let children = props.children

      for (let i = 0; i < contexts.length; i += 1) {
        const context = contexts[i]
        const splitValue = splitValues[i]
        children = (
          <context.Provider value={splitValue(value)}>
            {children}
          </context.Provider>
        )
      }

      return children
    }

    tuple.push(SplitProvider)

    for (let i = 0; i < splitValues.length; i += 1) {
      const context = createContext()
      contexts.push(context)
      tuple.push(createUseContext(context))
    }
  }

  for (let i = 0; i < tuple.length; i += 1) {
    useContainer[i] = tuple[i]
  }

  if (typeof Symbol === 'function' && Symbol.iterator) {
    useContainer[Symbol.iterator] = () => tuple[Symbol.iterator]()
  }

  return useContainer
}
