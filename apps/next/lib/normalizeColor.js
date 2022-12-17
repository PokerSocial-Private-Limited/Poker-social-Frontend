/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import isWebColor from './isWebColor'
import processColor from './processColor'

const normalizeColor = (color, opacity = 1) => {
  if (color == null) return

  if (typeof color === 'string' && isWebColor(color)) {
    return color
  }

  const colorInt = processColor(color)
  if (colorInt != null) {
    const r = (colorInt >> 16) & 255
    const g = (colorInt >> 8) & 255
    const b = colorInt & 255
    const a = ((colorInt >> 24) & 255) / 255
    const alpha = (a * opacity).toFixed(2)
    return `rgba(${r},${g},${b},${alpha})`
  }
}

export default normalizeColor
