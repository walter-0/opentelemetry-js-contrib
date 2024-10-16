/**
 * @copyright The OpenTelemetry Authors
 * @license Apache-2.0
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { HandleFunction, IncomingMessage, Server } from 'connect';

export const _LAYERS_STORE_PROPERTY: unique symbol = Symbol(
  'opentelemetry.instrumentation-connect.request-route-stack'
);

export type UseArgs1 = [HandleFunction];
export type UseArgs2 = [string, HandleFunction];
export type UseArgs = UseArgs1 | UseArgs2;
export type Use = (...args: UseArgs) => Server;
export type PatchedRequest = {
  [_LAYERS_STORE_PROPERTY]: string[];
} & IncomingMessage;
