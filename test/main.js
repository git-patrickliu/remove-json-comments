'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var removeCommentsJson = require('../index');

describe('remove-json-comments', function() {
    describe('test remove comments', function() {


        function compare(expected, fixture, done) {

            var baseExpected = __dirname + '/expected',
                baseFixture = __dirname + '/fixture';

            if(typeof fixture === 'function') {
                done = fixture;
                fixture= expected;
            }

            var expectedJsonStr = fs.readFileSync(baseExpected + '/' + expected, 'utf-8');
            expectedJsonStr = JSON.stringify(JSON.parse(expectedJsonStr));

            var fixtureJsonObj = '';
            try {
                fixtureJsonObj = fs.readFileSync(baseFixture + '/' + fixture, 'utf-8');
                fixtureJsonObj = JSON.parse(removeCommentsJson(fixtureJsonObj));
            } catch(e) {
                fixtureJsonObj = {};
            }

            assert.equal(expectedJsonStr, JSON.stringify(fixtureJsonObj));
            done();
        };

        it('no comments', function(done) {
            compare('simple.json', done);
        });

        it('simple double slash', function(done) {
            compare('simpleDoubleSlash.json', done);
        });

        it('simple slash wildcard', function(done) {
            compare('simpleSlashWildcard.json', done);
        });

        it('mixed', function(done) {
            compare('mixed.json', done);
        });
    });
});
