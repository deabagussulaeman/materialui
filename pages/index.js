import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Home Page
      </h1>
    </div>
  )
}