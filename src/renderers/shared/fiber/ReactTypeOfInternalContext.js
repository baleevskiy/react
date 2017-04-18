/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTypeOfInternalContext
 * @flow
 */

'use strict';

export type TypeOfInternalContext = 0 | 1;

module.exports = {
  NoContext: 0,
  AsyncUpdates: 1,
};