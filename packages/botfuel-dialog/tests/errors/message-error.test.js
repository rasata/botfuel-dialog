/**
 * Copyright (c) 2017 - present, Botfuel (https://www.botfuel.io).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MessageError = require('../../src/errors/message-error');

describe('MessageError', () => {
  test('should have the correct message when no parameters', async () => {
    const error = new MessageError({});
    expect(error.message).toEqual('Unknown MessageError');
    expect(error.name).toBe(undefined);
  });

  test('should have the correct name and message when parameters', async () => {
    const error = new MessageError({ name: 'invalid', message: 'Error message' });
    expect(error.message).toEqual('Error message');
    expect(error.name).toBe('invalid');
  });
});
