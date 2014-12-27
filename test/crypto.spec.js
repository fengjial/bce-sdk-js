/*
* Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*/

var path = require('path');

var crypto = require('../src/crypto');

describe('crypto', function() {
    it('md5sum', function() {
        expect(crypto.md5sum('hello world')).toEqual('XrY7u+Ae7tCTyyK7j1rNww==');
    });

    it('md5file', function(done) {
        crypto.md5file(path.join(__dirname, 'Makefile'))
            .then(function(md5sum) {
                expect(md5sum).toEqual('EYPMaQHNRW73PRa874z0og==');
            })
            .fin(done);
    });
});










/* vim: set ts=4 sw=4 sts=4 tw=120: */
