/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { FormContext, useFormContext, useForm } from 'react-hook-form'

export const useSvcFormContext = () => {
  const methods = useFormContext()

  return methods
}

export const SvcFormProvider = ({
  children,
  validationSchema,
  defaultValues
}) => {
  const methods = useForm({
    validationSchema,
    defaultValues
  })

  return <FormContext {...methods}>{children}</FormContext>
}

const SvcForm = ({ children, onSubmit }) => {
  const methods = useSvcFormContext()

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      {children}
    </form>
  )
}

export const withSvcForm = Component => props => {
  return (
    <SvcFormProvider>
      <Component {...props} />
    </SvcFormProvider>
  )
}

export default SvcForm
