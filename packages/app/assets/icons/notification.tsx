import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function NotificationIcon({ width = '40', height = '40' }: IconProps) {
  return (
    <Svg
      width={width}
      height={width}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 1232 1232"
    >
      <Path fill="none" d="M0 0h1232v1232H0z" />
      <Path
        fill="#FEFEFE"
        d="M829 950c10 94-63 180-162 196-95 16-194-39-216-135-81 8-153 10-204 3-57-8-127-31-138-98-11-69 42-90 76-131 6-8 13-15 18-24 10-16 14-27 20-44s10-33 12-52c9-79-10-127-10-200 0-85 36-163 101-218 13-11 31-23 50-34 2-36 17-69 45-94 73-64 189-39 225 49h1c128 26 215 117 236 245 12 78 44 186 115 230 21 13 35 20 57 30 38 17 61 33 68 78 17 104-124 151-202 175-26 7-57 16-92 24zM466 260c-26 4-73 34-89 47-48 42-73 98-73 158 0 65 21 102 9 209-2 25-7 45-15 68-8 24-13 36-27 59-8 14-15 21-25 34-26 32-62 52-59 69 3 20 50 29 71 32 136 19 504-45 640-86 33-10 153-48 147-86-2-13-6-12-22-19-31-14-37-16-67-35-92-57-134-179-151-284-17-100-82-162-173-180-33-7-48-7-57-4 3-9 4-19 2-30-13-78-134-59-121 19 2 12 6 21 12 29h-2zm61 705c-1 8-1 16 0 24 9 54 67 89 128 80 69-12 114-78 88-139-67 13-143 26-216 35z"
      />
    </Svg>
  )
}
