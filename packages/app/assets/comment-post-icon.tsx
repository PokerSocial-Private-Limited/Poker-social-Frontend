import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './icons/icon-props.type'

export function CommentPostIcon({ color = 'white' }: IconProps) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        fill={color}
        d="M4.10514201,11.8070619 L2.74013818,2.2520351 L22.236068,12 L2.74013818,21.7479649 L4.10514201,12.1929381 L4.87689437,12 L4.10514201,11.8070619 Z M5.25986182,5.7479649 L5.89485799,10.1929381 L13.1231056,12 L5.89485799,13.8070619 L5.25986182,18.2520351 L17.763932,12 L5.25986182,5.7479649 Z"
      />
    </Svg>
  )
}
