import React, { useEffect } from 'react'
import { Form } from '@unform/web'
import Input from '../components/Input'
import InputMask from '../components/InputMask'

export default function SignIn () {
  const [initialData, setInitialData] = React.useState({})

  function handleSubmit (data) {
    console.log(data)
  }

  useEffect(() => {
    fetch('http://localhost:3333/users/1').then(response => {
      response.json().then(data => setInitialData(data))
    })
  }, [])

  return (
    <Form onSubmit={handleSubmit} initialData={initialData}>
      <Input name="id" />
      <InputMask name="doc" mask={'999.999.999-99'}/>
      <Input name="name" />

      <button type="submit">Sign in</button>
    </Form>
  )
}
