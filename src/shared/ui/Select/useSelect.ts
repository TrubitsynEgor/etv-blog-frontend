'use client'
import { useEffect, useRef, useState } from 'react'
import { SelectOption, SelectProps } from './Select.types'
import { selectOptions } from '@/features/posts/consts'

export const useSelectedValue = () => {
  const [value, setValue] = useState<SelectOption[]>([selectOptions[0]])
  return { value, setValue }
}

export const useSelect = ({
  onChange,
  options,
  multiple,
  value,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // function clearOptions() {
  //   multiple ? onChange([]) : onChange(undefined)
  // }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case 'Enter':
        case 'Space':
          e.preventDefault()
          setIsOpen((prev) => !prev)
          if (isOpen) selectOption(options[highlightedIndex])
          break
        case 'ArrowUp':
        case 'ArrowDown': {
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case 'Escape':
          setIsOpen(false)
          break
      }
    }
    containerRef.current?.addEventListener('keydown', handler)

    return () => {
      containerRef.current?.removeEventListener('keydown', handler)
    }
  }, [isOpen, highlightedIndex, options])

  return {
    isOpen,
    setIsOpen,
    highlightedIndex,
    setHighlightedIndex,
    containerRef,
    // clearOptions,
    selectOption,
    isOptionSelected,
  }
}
