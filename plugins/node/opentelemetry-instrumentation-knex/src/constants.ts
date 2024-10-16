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

export const MODULE_NAME = 'knex';
export const SUPPORTED_VERSIONS = [
  // use "lib/execution" for runner.js, "lib" for client.js as basepath, latest tested 0.95.6
  '>=0.22.0 <4',
  // use "lib" as basepath
  '>=0.10.0 <0.18.0',
  '>=0.19.0 <0.22.0',
  // use "src" as basepath
  '>=0.18.0 <0.19.0',
];
