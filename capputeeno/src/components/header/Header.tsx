"use client"
import React from 'react'
import * as S from './Header.styled'
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputSearchIcon } from '../primary-input'
import { CartControl } from '../cart-control'

const sairaStencial = Saira_Stencil_One({weight: ['400'], subsets: ['latin'] })


export const Header = () => {
  return (
    <>
      <S.Header> 
        <S.Logo className={sairaStencial.className}>
          Capputeeno
        </S.Logo>
        <S.Div >
          <PrimaryInputSearchIcon />
          <CartControl/>
        </S.Div>
      </S.Header>
    </>
  )
}
