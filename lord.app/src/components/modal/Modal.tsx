"use client"

import styles from "./Modal.module.css"

type Props = {
  aberto: boolean
  fechar: () => void
  children: React.ReactNode
}

export default function Modal({ aberto, fechar, children }: Props) {

  if (!aberto) return null

  return (
    <div className={styles.overlay} onClick={fechar}>

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          className={styles.closeButton}
          onClick={fechar}
        >
          Fechar
        </button>

      </div>

    </div>
  )
}