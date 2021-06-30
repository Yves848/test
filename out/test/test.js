"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_json_1 = __importDefault(require("./categories.json"));
var categs = [];
function asyncForEach(array, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < array.length; index++) {
            yield callback(array[index], index, array);
        }
    });
}
const getCategs = (aCategs, parent) => __awaiter(void 0, void 0, void 0, function* () {
    asyncForEach(aCategs, (categ) => __awaiter(void 0, void 0, void 0, function* () {
        categ.parent = parent;
        if (categ.subCategories) {
            //console.log(categ.name);
            yield getCategs(categ.subCategories, categ);
        }
    }));
});
const printCategs = (aCategs, parent) => __awaiter(void 0, void 0, void 0, function* () {
    asyncForEach(aCategs, (categ) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(categ);
        if (categ.subCategories) {
            //console.log(categ.name);
            yield printCategs(categ.subCategories);
        }
    }));
});
categs = categories_json_1.default;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield getCategs(categs);
    //console.log(categs);
    yield printCategs(categs);
}))();
//# sourceMappingURL=test.js.map