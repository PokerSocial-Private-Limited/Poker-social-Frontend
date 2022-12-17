import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function FriendsIcon({ width = '40', height = '40' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 9609 9609"
    >
      <Path fill="none" d="M0 0h9609v9609H0z" />
      <G fill="#FEFEFE">
        <Path d="M5159 4781c742-200 1567-134 2265 159 1327 556 1982 1781 1877 3197l-24 322c-634 2-1444 4-2268 6 12-120 21-236 26-348l1918-6c167-2252-1713-3275-3305-3071-170-110-337-194-489-259zM4011 8471c-1089 2-1454 1-2-4l2 4zM3669 525c1066 0 1930 932 1930 2082 0 1151-864 2083-1930 2083s-1931-932-1931-2083c0-1150 865-2082 1931-2082zm0 353c871 0 1577 774 1577 1729 0 956-706 1730-1577 1730s-1578-774-1578-1730c0-955 707-1729 1578-1729z" />
        <Path d="M297 8717c0-1234 281-2117 1256-2929 955-795 2390-882 3509-412 1391 583 2077 1867 1968 3350l-25 338-6708 19v-366zm365 0 6003-18c230-3105-3255-3982-4878-2630C880 6824 662 7623 662 8717zM6516 592c944 0 1710 826 1710 1845s-766 1845-1710 1845c-366 0-705-124-984-335 64-82 122-169 174-261 228 179 508 284 810 284 772 0 1398-686 1398-1533 0-846-626-1532-1398-1532-367 0-700 155-950 408-62-85-130-164-204-237 304-300 709-484 1154-484z" />
      </G>
    </Svg>
  )
}
