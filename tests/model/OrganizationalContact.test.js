/* eslint-env jest */

/*
 * This file is part of CycloneDX Node Module.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (c) OWASP Foundation. All Rights Reserved.
 */

const OrganizationalContact = require('../../model/OrganizationalContact')

describe('Model: OrganizationalContact', () => {
  const contact = new OrganizationalContact('John Doe', 'john.doe@examp.com', '555-1212')
  test.each(
    [
      'XML',
      'JSON'
    ]
  )('normalized to %s', (target) => {
    const result = contact[`to${target}`]()
    expect(result.name).toBe('John Doe')
    expect(result.email).toBe('john.doe@examp.com')
    expect(result.phone).toBe('555-1212')
  })
})
