var tape = require("tape");

var protobuf = require("..");

tape.test("parse reserved range", function(test) {
    var root = protobuf.parse(`syntax = "proto3";
        message Foo {
            reserved 2, 15, 9 to 11;
        }`).root.resolveAll();
    test.same(root.Foo.reserved, [[2, 3], [15, 16], [9, 11]], "reserved ranges should be parsed");

    test.end();
});
