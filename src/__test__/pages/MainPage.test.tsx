import react from 'React'
import {render,screen} from '@testing-library/react'
import Main from 'pages/MainPage'

describe('<MainPage/>',()=>{
  it('renders component correctly',()=>{
    render(<Main/>)
  })
})