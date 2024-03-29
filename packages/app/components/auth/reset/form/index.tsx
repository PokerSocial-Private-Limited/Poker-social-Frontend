import { Formik } from 'formik'
import { Box, Spacer, useToast, Column } from 'native-base'
import { ResetFormActions } from './actions'
import { ResetFormFooter } from './footer'
import { ResetFormContent } from './content'
import { ResetFormHeader } from './header'
import { useRouter } from 'solito/router'
import { resetPassword } from 'app/services/authentication'
import { showErrorToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'
import { useState } from 'react'
import { FormError } from '../../form-error'

export function ResetForm({ email }: { email: string }) {
  const router = useRouter()
  const [error, setError] = useState('')
  const clearError = () => setError('')
  const formInitialValues = {
    otp: '',
    newPassword: '',
    confirmPassword: '',
  }

  async function formSubmit(
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) {
    clearError()
    Keyboard.dismiss()
    try {
      await resetPassword(email, values.otp, values.newPassword)
      router.replace('/login')
    } catch (error) {
      showErrorToast(error.message)
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box
      px={12}
      pb={12}
      height="full"
      bg="brand.main"
      maxWidth={450}
      width="full"
    >
      <ResetFormHeader />
      {error && <FormError msg={error} setError={setError} />}

      <Box mt={8}>
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({ isSubmitting, handleSubmit }) => (
            <Column space={12} mx={8} mt={10}>
              <ResetFormContent />

              <ResetFormActions
                isLoading={isSubmitting}
                onPress={handleSubmit}
              />
            </Column>
          )}
        </Formik>
      </Box>
      <Spacer />
      <ResetFormFooter />
    </Box>
  )
}
