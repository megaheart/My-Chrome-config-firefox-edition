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
browser.runtime.onStartup.addListener(() => __awaiter(void 0, void 0, void 0, function* () {
    let list = yield browser.tabs.query({ url: "https://habitica.com/" });
    if (list.length === 0) {
        browser.tabs.create({ active: true, url: "https://habitica.com/" });
    }
}));
//# sourceMappingURL=background.js.map