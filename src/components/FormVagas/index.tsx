import { FormEvent, useState } from 'react'
import styled from 'styled-components';
import { Form , BtnPesquisar , Campo } from './FormVagas.module.tsx';

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">
        Pesquisar
      </BtnPesquisar>
    </Form>
  );
}
export default FormVagas
