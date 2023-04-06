import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home', () => {
  (useRouter as jest.Mock).mockReturnValue({ query: {} })
  it('renders a heading', () => {
    render(<Provider store={store}><Home /></Provider>)

    const heading = screen.getByRole('heading', {
      name: /Carts manipulator/i,
    })

    expect(heading).toBeInTheDocument()
  })
})