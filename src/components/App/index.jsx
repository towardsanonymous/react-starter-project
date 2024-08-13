import React, { useState } from 'react'
import { connect } from 'react-redux'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { setCounter } from '../../services/Counter/actions'

export const index = ({counter,setCounter}) => {

  console.log(counter)
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCounter(counter + 1)}>
          count is {counter}
        </button>

        <button onClick={() => setCounter(0)}>
          Reset
        </button>
        <p>
          Edit <code>src/components/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = {
  setCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(index)