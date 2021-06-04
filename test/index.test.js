"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uint8arrays_1 = __importDefault(require("uint8arrays"));
const src_1 = require("../src");
describe('key-did-provider-secp256r1', () => {
    test('encodeDID', () => {
        const key = uint8arrays_1.default.fromString('f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f', 'base16');
        expect(src_1.encodeDID(key)).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map