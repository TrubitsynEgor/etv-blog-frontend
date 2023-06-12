'use client'

import { Button, DetailsDivProps, Select } from '@/shared'
import { selectOptions } from '../consts'
import { SelectOption } from '@/shared/ui/Select/Select.types'
import { Dispatch, SetStateAction } from 'react'

interface PostFilterProps extends DetailsDivProps {
  isNew: boolean
  isPopular: boolean
  handleIsNew: () => void
  handleIsPopular: () => void
  value: SelectOption[]
  setValue: Dispatch<SetStateAction<SelectOption[]>>
}

export const PostFilter = ({
  isNew,
  isPopular,
  handleIsNew,
  handleIsPopular,
  value,
  setValue,
}: PostFilterProps) => {
  return (
    <div className="flex items-center gap-x-4 ">
      <Button
        onClick={handleIsNew}
        appearance={isNew ? 'primary' : 'ghost'}
        className={isNew ? 'border-4 border-green-500' : ''}
      >
        New
      </Button>

      <Button
        onClick={handleIsPopular}
        appearance={isPopular ? 'primary' : 'ghost'}
        className={isPopular ? 'border-4 border-green-500' : ''}
      >
        Popular
      </Button>

      <Select
        multiple
        options={selectOptions}
        value={value}
        onChange={(o) => setValue(o)}
      />
    </div>
  )
}
