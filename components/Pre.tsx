'use client'
import { useState, useRef, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Icon } from '@iconify/react'
import { Component } from './libs/mdx-bundler'

export const Pre: Component<DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>> = ({
  children,
}) => {
  const textInput = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }

  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  const onCopy = () => {
    if (textInput.current && textInput.current.textContent) {
      setCopied(true)
      navigator.clipboard.writeText(textInput.current.textContent)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          className="absolute rounded-lg right-2 top-2 bg-slate-700"
          onClick={onCopy}
        >
          {copied ? (
            <Icon icon="gg:check-r" className="w-5 h-5 text-green-400" />
          ) : (
            <Icon icon="mingcute:copy-2-line" className="w-5 h-5 text-slate-300" />
          )}
        </button>
      )}
      <pre>{children}</pre>
    </div>
  )
}
