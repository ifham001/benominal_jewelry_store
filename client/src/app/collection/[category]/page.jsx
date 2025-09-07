import CategoryPage from '@/components/pages/CategoryPage';
import React from 'react'

export default async function Page({ params }) {
    const { category } = await params;
  return (
    <>
      <CategoryPage category={category} />
    </>
  )
}
