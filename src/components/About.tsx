import React, { Component } from 'react'

export default class About extends Component {






  render() {
    return (
      <div
        style={{
          height: "100%",
          width: '100%',
          position: 'relative'
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          style={{
            height: "100%",
            width: '100%',
          }}
        />
        <div
          style={{
            width: '100%',
            textAlign: "center",
            zIndex: 5,
            position: "absolute",
            top: 100,
          }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: 'bolder',
              textDecoration: "5px dashed underline"
            }}
          >KASHMIR</h1>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: 'bolder',
              color: "#808080",
              textTransform: 'capitalize'
            }}>
            Kashmir, where nature's beauty and tranquility merge in a timeless embrace.
          </p>
        </div>
      </div>
    )
  }
}
