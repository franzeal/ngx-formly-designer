(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-formly-designer/fesm5/ngx-formly-designer.js":
/*!***************************************************************!*\
  !*** ./dist/ngx-formly-designer/fesm5/ngx-formly-designer.js ***!
  \***************************************************************/
/*! exports provided: fieldComponents, wrapperComponents, config, FieldsService, FORMLY_DESIGNER_CONFIG_TOKEN, FormlyDesignerConfig, FormlyDesignerService, FormlyDesignerComponent, FormlyDesignerModule, decycle, ɵe, ɵf, ɵg, ɵh, ɵj, ɵi, ɵk, ɵl, ɵd, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldComponents", function() { return fieldComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperComponents", function() { return wrapperComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsService", function() { return FieldsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMLY_DESIGNER_CONFIG_TOKEN", function() { return FORMLY_DESIGNER_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyDesignerConfig", function() { return FormlyDesignerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyDesignerService", function() { return FormlyDesignerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyDesignerComponent", function() { return FormlyDesignerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyDesignerModule", function() { return FormlyDesignerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decycle", function() { return decycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return FieldEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return FieldPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TypeSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return WrapperEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return WrapperPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return WrapperSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return WrappersPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DecyclePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return TemplateDesigner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FormlyDesignerWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FormlyDesignerFieldWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FormlyDesignerFieldGroupWrapperComponent; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerWrapperComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FormlyDesignerWrapperComponent, _super);
    function FormlyDesignerWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyDesignerWrapperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-wrapper',
                    template: "\n        <ng-template #fieldComponent></ng-template>\n    "
                }] }
    ];
    FormlyDesignerWrapperComponent.propDecorators = {
        fieldComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"] },] }]
    };
    return FormlyDesignerWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FieldWrapper"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FORMLY_DESIGNER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('FORMLY_DESIGNER_CONFIG_TOKEN');
var FormlyDesignerConfig = /** @class */ (function () {
    function FormlyDesignerConfig(configs, formlyConfig) {
        if (configs === void 0) { configs = []; }
        var _this = this;
        this.formlyConfig = formlyConfig;
        this.types = {};
        this.wrappers = {};
        this.settings = { showClassName: true };
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.addConfig(config); }));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    FormlyDesignerConfig.prototype.addConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.settings) {
            this.setSettings(config.settings);
        }
        if (config.types) {
            this.setType(config.types);
        }
        if (config.wrappers) {
            this.setWrapper(config.wrappers);
        }
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    FormlyDesignerConfig.prototype.setSettings = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        if (settings.showClassName !== undefined) {
            this.settings.showClassName = !!settings.showClassName;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormlyDesignerConfig.prototype.setType = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (Array.isArray(options)) {
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.setType(option);
            }));
        }
        else {
            // Throw if type isn't part of the formly config
            this.formlyConfig.getType(options.name);
            if (!this.types[options.name]) {
                this.types[options.name] = (/** @type {?} */ ({}));
            }
            /** @type {?} */
            var type = this.types[options.name];
            type.name = options.name;
            type.fieldArray = !!options.fieldArray;
            type.fields = options.fields;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormlyDesignerConfig.prototype.setWrapper = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (Array.isArray(options)) {
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.setWrapper(option);
            }));
        }
        else {
            // Throw if wrapper isn't part of the formly config
            this.formlyConfig.getWrapper(options.name);
            if (!this.wrappers[options.name]) {
                this.wrappers[options.name] = (/** @type {?} */ ({}));
            }
            /** @type {?} */
            var wrapper = this.wrappers[options.name];
            wrapper.name = options.name;
            wrapper.fields = options.fields;
        }
    };
    FormlyDesignerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    FormlyDesignerConfig.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [FORMLY_DESIGNER_CONFIG_TOKEN,] }] },
        { type: _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyConfig"] }
    ]; };
    return FormlyDesignerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var keyPathMemberName = '_formlyDesignerKeyPath';
// Source: https://github.com/formly-js/ngx-formly/blob/master/src/core/src/lib/utils.ts
/**
 * @param {?} field
 * @return {?}
 */
function getKeyPath(field) {
    var e_1, _a;
    /* We store the keyPath in the field for performance reasons. This function will be called frequently. */
    if (!((/** @type {?} */ (field)))[keyPathMemberName] || ((/** @type {?} */ (field)))[keyPathMemberName].key !== field.key) {
        /** @type {?} */
        var keyPath = [];
        if (field.key) {
            /* Also allow for an array key, hence the type check  */
            /** @type {?} */
            var pathElements = typeof field.key === 'string' ? field.key.split('.') : field.key;
            try {
                for (var pathElements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(pathElements), pathElements_1_1 = pathElements_1.next(); !pathElements_1_1.done; pathElements_1_1 = pathElements_1.next()) {
                    var pathElement = pathElements_1_1.value;
                    if (typeof pathElement === 'string') {
                        /* replace paths of the form names[2] by names.2, cfr. angular formly */
                        pathElement = pathElement.replace(/\[(\w+)\]/g, '.$1');
                        keyPath = keyPath.concat(pathElement.split('.'));
                    }
                    else {
                        keyPath.push(pathElement);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (pathElements_1_1 && !pathElements_1_1.done && (_a = pathElements_1.return)) _a.call(pathElements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            for (var i = 0; i < keyPath.length; i++) {
                /** @type {?} */
                var pathElement = keyPath[i];
                if (typeof pathElement === 'string' && /^\d+$/.test(pathElement)) {
                    keyPath[i] = parseInt(pathElement, 10);
                }
            }
        }
        ((/** @type {?} */ (field)))[keyPathMemberName] = {
            key: field.key,
            path: keyPath,
        };
    }
    return ((/** @type {?} */ (field)))[keyPathMemberName].path.slice();
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalType(a, b) {
    return (!a.fieldArray === !b.fieldArray) && (!a.fieldGroup === !b.fieldGroup);
}
/**
 * @param {?} fields
 * @param {?} callback
 * @param {?=} path
 * @param {?=} parent
 * @return {?}
 */
function traverseFields(fields, callback, path, parent) {
    var e_2, _a;
    path = path || [];
    try {
        for (var fields_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
            var field = fields_1_1.value;
            if (callback(field, path, parent)) {
                return true;
            }
            if (field.fieldArray) {
                if (traverseFields([field.fieldArray], callback, path.concat(getKeyPath(field)), field)) {
                    return true;
                }
            }
            else if (field.fieldGroup) {
                if (traverseFields(field.fieldGroup, callback, path.concat(getKeyPath(field)), field)) {
                    return true;
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
// https://stackoverflow.com/a/40294058
// export const cloneDeep = (obj, hash = new WeakMap()): typeof obj => {
//   if (Object(obj) !== obj) return obj; // primitives
//   if (hash.has(obj)) return hash.get(obj); // cyclic reference
//   const result = obj instanceof Date ? new Date(obj)
//     : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
//       : obj.constructor ? new obj.constructor()
//         : Object.create(null);
//   hash.set(obj, result);
//   if (obj instanceof Map)
//     Array.from(obj, ([key, val]) => result.set(key, cloneDeep(val, hash)));
//   return Object.assign(result, ...Object.keys(obj).map(
//     key => ({ [key]: cloneDeep(obj[key], hash) })));
// };
/** @type {?} */
var isArray = Array.isArray;
// https://stackoverflow.com/a/28953167
/** @type {?} */
var isEmpty = (/**
 * @param {?} val
 * @return {?}
 */
function (val) {
    if (val === undefined)
        return true;
    else if (typeof (val) === 'function' || typeof (val) === 'number' || typeof (val) === 'boolean'
        || Object.prototype.toString.call(val) === '[object Date]')
        return false;
    else if (val == null || val.length === 0) // null or 0 length array
        return true;
    else if (typeof (val) === 'object') {
        // empty object
        /** @type {?} */
        var r = void 0;
        for (var _1 in val)
            r = false;
        return r;
    }
    return false;
});
/** @type {?} */
var isFunction = (/**
 * @param {?} val
 * @return {?}
 */
function (val) { return typeof val === 'function'; });
/** @type {?} */
var isObject = (/**
 * @param {?} val
 * @return {?}
 */
function (val) { return typeof val === 'object' && val != null; });
/** @type {?} */
var isString = (/**
 * @param {?} val
 * @return {?}
 */
function (val) { return typeof val === 'string' || val instanceof String; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldsService = /** @class */ (function () {
    function FieldsService(formlyDesignerConfig) {
        this.formlyDesignerConfig = formlyDesignerConfig;
    }
    /**
     * @param {?} field
     * @param {?} fields
     * @return {?}
     */
    FieldsService.prototype.getFullKeyPath = /**
     * @param {?} field
     * @param {?} fields
     * @return {?}
     */
    function (field, fields) {
        /** @type {?} */
        var keyPath = [];
        if (field && field.key) {
            /** @type {?} */
            var parents_1 = new Map();
            traverseFields(fields, (/**
             * @param {?} f
             * @param {?} path
             * @param {?} parent
             * @return {?}
             */
            function (f, path, parent) {
                parents_1.set(f, parent);
            }));
            keyPath = getKeyPath(field);
            /** @type {?} */
            var cur = parents_1.get(field);
            while (cur) {
                keyPath = getKeyPath(cur).concat(keyPath);
                cur = parents_1.get(cur);
            }
        }
        return keyPath;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    FieldsService.prototype.getTypeFields = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.getFields(type, 'type');
    };
    /**
     * @param {?} wrapper
     * @return {?}
     */
    FieldsService.prototype.getWrapperFields = /**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        return this.getFields(wrapper, 'wrapper');
    };
    /** Check the field for control type conflict */
    /**
     * Check the field for control type conflict
     * @param {?} field
     * @param {?} fields
     * @param {?=} parent
     * @return {?}
     */
    FieldsService.prototype.checkField = /**
     * Check the field for control type conflict
     * @param {?} field
     * @param {?} fields
     * @param {?=} parent
     * @return {?}
     */
    function (field, fields, parent) {
        /** @type {?} */
        var fullPathByField = new Map();
        /** @type {?} */
        var newPath = this.getFullKeyPath(parent || {}, fields).concat(getKeyPath(field));
        /** @type {?} */
        var length = newPath.length;
        return !traverseFields(fields, (/**
         * @param {?} f
         * @param {?} p
         * @return {?}
         */
        function (f, p) {
            /** @type {?} */
            var path = fullPathByField.get(f) || fullPathByField.set(f, (p || []).concat(getKeyPath(f))).get(f);
            if (path.length !== length) {
                return;
            }
            for (var i = 0; i < length; i++) {
                if (path[i] !== newPath[i]) {
                    return;
                }
            }
            return !equalType(field, f);
        }));
    };
    /**
     * @param {?} field
     * @param {?} designerField
     * @return {?}
     */
    FieldsService.prototype.mutateField = /**
     * @param {?} field
     * @param {?} designerField
     * @return {?}
     */
    function (field, designerField) {
        if (isObject(field.templateOptions)) {
            field.templateOptions['$designerField'] = designerField;
        }
        else {
            field.templateOptions = { $designerField: designerField };
        }
        if (field.fieldGroup) {
            this.mutateFields(field.fieldGroup, designerField);
        }
        else if (field.fieldArray && field.fieldArray.fieldGroup) {
            if (designerField) {
                this.mutateField(field.fieldArray, designerField);
            }
            else {
                // Treating fieldArrays as fieldGroups
                field.templateOptions['$fieldArray'] = { type: field.type };
                field.fieldGroup = field.fieldArray.fieldGroup;
                delete field.fieldArray;
                delete field.type;
                this.mutateFields(field.fieldGroup, designerField);
            }
        }
        return field;
    };
    /**
     * @param {?} fields
     * @param {?} designerFields
     * @return {?}
     */
    FieldsService.prototype.mutateFields = /**
     * @param {?} fields
     * @param {?} designerFields
     * @return {?}
     */
    function (fields, designerFields) {
        var _this = this;
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return _this.mutateField(field, designerFields); }));
    };
    /**
     * @private
     * @param {?} name
     * @param {?} type
     * @return {?}
     */
    FieldsService.prototype.getFields = /**
     * @private
     * @param {?} name
     * @param {?} type
     * @return {?}
     */
    function (name, type) {
        /** @type {?} */
        var designerOption = (/** @type {?} */ ((name ? this.getDesignerOptions(type)[name] || {} : {})));
        /** @type {?} */
        var fields = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(designerOption.fields || []);
        this.mutateFields(fields, true);
        return fields;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    FieldsService.prototype.getDesignerOptions = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'type') {
            return this.formlyDesignerConfig.types;
        }
        if (type === 'wrapper') {
            return this.formlyDesignerConfig.wrappers;
        }
        return {};
    };
    FieldsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    FieldsService.ctorParameters = function () { return [
        { type: FormlyDesignerConfig }
    ]; };
    return FieldsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerService = /** @class */ (function () {
    function FormlyDesignerService(designerConfig, fieldsService, formlyConfig) {
        this.designerConfig = designerConfig;
        this.fieldsService = fieldsService;
        this.formlyConfig = formlyConfig;
        this._disabled = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this._fields = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this._model = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
    }
    Object.defineProperty(FormlyDesignerService.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled.next(!!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerService.prototype, "disabled$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerService.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fields.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Prune the fields because ngx-formly pollutes them with internal state
            // causing incorrect behavior when re-applied.
            /** @type {?} */
            var fields = this.createPrunedFields(isArray(value) ? value : []);
            this._fields.next(fields);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerService.prototype, "fields$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fields.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerService.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._model.next(value == null ? {} : value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerService.prototype, "model$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.addField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.fieldsService.mutateField(field, false);
        /** @type {?} */
        var fields = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.fields);
        fields.push(field);
        this.fields = fields;
        this.model = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.model);
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.removeField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.unsetField(field);
        if (this.replaceField(this.fields, field, undefined)) {
            this.removeControl(field.formControl);
        }
        this.fields = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.fields);
        this.model = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.model);
    };
    /**
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    FormlyDesignerService.prototype.updateField = /**
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    function (original, modified) {
        /** @type {?} */
        var pruned = this.fieldsService.mutateField(this.createPrunedField(modified), false);
        if (this.replaceField(this.fields, original, pruned)) {
            if (original.formControl !== pruned.formControl) {
                this.unsetField(original);
                this.removeControl(original.formControl);
            }
            this.fields = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.fields);
            this.model = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.model);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.convertField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.createPrunedField(field);
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FormlyDesignerService.prototype.convertFields = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        return this.createPrunedFields(fields);
    };
    /**
     * @return {?}
     */
    FormlyDesignerService.prototype.createDesignerFields = /**
     * @return {?}
     */
    function () {
        return this.createPrunedFields(this.fields);
    };
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    FormlyDesignerService.prototype.createPrunedFields = /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        /** @type {?} */
        var prunedFields = [];
        if (isArray(fields)) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var pruned = _this.createPrunedField(field);
                if (field.fieldArray) {
                    pruned.fieldArray = _this.createPrunedField(field.fieldArray);
                }
                else if (field.fieldGroup && !pruned.fieldArray) {
                    pruned.fieldGroup = _this.createPrunedFields(field.fieldGroup);
                }
                if (Object.keys(pruned).length > 0) {
                    prunedFields.push(pruned);
                }
            }));
        }
        return prunedFields;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.getWrappers = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (!field || !isArray(field.wrappers)) {
            return [];
        }
        /** @type {?} */
        var clonedField = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(field);
        /** @type {?} */
        var wrappers = clonedField.wrappers = (clonedField.wrappers || []);
        if (isFunction(this.designerConfig.settings.filterWrapper)) {
            wrappers = wrappers.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return _this.designerConfig.settings.filterWrapper(w, clonedField); }));
        }
        // Determine wrappers part of the formly configuration (static and dynamic) to exclude them from the result
        /** @type {?} */
        var staticWrappers = field.type ? this.formlyConfig.getType(field.type).wrappers || [] : [];
        /** @type {?} */
        var typeWrappers = staticWrappers
            .concat(this.formlyConfig.templateManipulators.preWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(clonedField); })))
            .concat(this.formlyConfig.templateManipulators.postWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(clonedField); })))
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w; }));
        // Remove wrappers part of the formly configuration from the result
        if (typeWrappers.length > 0) {
            for (var i = wrappers.length - 1; i >= 0; i--) {
                for (var j = typeWrappers.length - 1; j >= 0; j--) {
                    if (wrappers[i] === typeWrappers[j]) {
                        typeWrappers.splice(j, 1);
                        wrappers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        return wrappers;
    };
    /** Prunes the field of paths not identified in the designer config */
    /**
     * Prunes the field of paths not identified in the designer config
     * @private
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.createPrunedField = /**
     * Prunes the field of paths not identified in the designer config
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        /** @type {?} */
        var pruned;
        /** @type {?} */
        var type = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"])(field, 'templateOptions.$fieldArray.type', field.type);
        /** @type {?} */
        var designerType = this.designerConfig.types[type];
        if (designerType) {
            pruned = { key: field.key, type: type };
            this.applyProperties(field, pruned, designerType.fields);
            if (designerType.fieldArray) {
                pruned.fieldArray = {
                    fieldGroup: this.createPrunedFields(field.fieldGroup)
                };
            }
        }
        else {
            pruned = isEmpty(field.key) ? {} : { key: field.key };
            if (isArray(field.fieldGroup)) {
                pruned.fieldGroup = this.createPrunedFields(field.fieldGroup);
            }
        }
        /** @type {?} */
        var className;
        if (isString(field.className) && (className = field.className.trim()).length > 0) {
            pruned.className = className;
        }
        /** @type {?} */
        var wrappers = this.getWrappers(field);
        if (wrappers.length > 0) {
            pruned.wrappers = wrappers;
            /** @type {?} */
            var designerWrapperFields = wrappers.map((/**
             * @param {?} wrapper
             * @return {?}
             */
            function (wrapper) { return _this.designerConfig.wrappers[wrapper]; }))
                .filter((/**
             * @param {?} designerOption
             * @return {?}
             */
            function (designerOption) { return designerOption && isArray(designerOption.fields); }))
                .reduce((/**
             * @param {?} previous
             * @param {?} current
             * @return {?}
             */
            function (previous, current) { return previous.concat(current.fields); }), []);
            this.applyProperties(field, pruned, designerWrapperFields);
        }
        return pruned;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} designed
     * @param {?} designerFields
     * @return {?}
     */
    FormlyDesignerService.prototype.applyProperties = /**
     * @private
     * @param {?} field
     * @param {?} designed
     * @param {?} designerFields
     * @return {?}
     */
    function (field, designed, designerFields) {
        if (isArray(designerFields)) {
            designerFields.forEach((/**
             * @param {?} designerField
             * @return {?}
             */
            function (designerField) {
                /** @type {?} */
                var value = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"])(field, designerField.key);
                if (value != null && (!isString(value) || value.length > 0) && value !== designerField.defaultValue) {
                    Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"])(designed, designerField.key, value);
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} fields
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    FormlyDesignerService.prototype.replaceField = /**
     * @private
     * @param {?} fields
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    function (fields, original, modified) {
        if (isArray(fields)) {
            /** @type {?} */
            var l = fields.length;
            for (var i = 0; i < l; i++) {
                /** @type {?} */
                var field = fields[i];
                if (field === original) {
                    if (modified == null) {
                        fields.splice(i, 1);
                    }
                    else {
                        fields[i] = modified;
                    }
                    return true;
                }
                if (field.fieldGroup && this.replaceField(field.fieldGroup, original, modified)) {
                    return true;
                }
                if (field.fieldArray && this.replaceFieldArray(field, original, modified)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    FormlyDesignerService.prototype.replaceFieldArray = /**
     * @private
     * @param {?} parent
     * @param {?} original
     * @param {?} modified
     * @return {?}
     */
    function (parent, original, modified) {
        /** @type {?} */
        var fieldArray = parent.fieldArray;
        if (fieldArray === original) {
            parent.fieldArray = modified;
            return true;
        }
        if (fieldArray.fieldGroup && this.replaceField(fieldArray.fieldGroup, original, modified)) {
            return true;
        }
        return fieldArray.fieldArray && this.replaceFieldArray(fieldArray, original, modified);
    };
    /**
     * @private
     * @param {?} key
     * @param {?} path
     * @param {?=} arrayNext
     * @return {?}
     */
    FormlyDesignerService.prototype.buildPath = /**
     * @private
     * @param {?} key
     * @param {?} path
     * @param {?=} arrayNext
     * @return {?}
     */
    function (key, path, arrayNext) {
        if (arrayNext === void 0) { arrayNext = false; }
        return path ? key + (arrayNext ? path : '.' + path) : key;
    };
    /**
     * @private
     * @param {?} control
     * @param {?=} includeSelf
     * @return {?}
     */
    FormlyDesignerService.prototype.path = /**
     * @private
     * @param {?} control
     * @param {?=} includeSelf
     * @return {?}
     */
    function (control, includeSelf) {
        if (includeSelf === void 0) { includeSelf = true; }
        /** @type {?} */
        var path = '';
        /** @type {?} */
        var arrayNext = false;
        if (!includeSelf) {
            control = (control || (/** @type {?} */ ({}))).parent;
        }
        for (var child = control, parent_1 = (control || (/** @type {?} */ ({}))).parent; !!parent_1; child = parent_1, parent_1 = parent_1.parent) {
            if (parent_1 instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]) {
                for (var key in parent_1.controls) {
                    if (parent_1.controls[key] === child) {
                        path = this.buildPath(key, path, arrayNext);
                        arrayNext = false;
                        break;
                    }
                }
            }
            else if (parent_1 instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]) {
                for (var i = 0; i < parent_1.length; i++) {
                    if (parent_1.at(i) === child) {
                        path = this.buildPath('[' + i + ']', path, arrayNext);
                        arrayNext = true;
                        break;
                    }
                }
            }
        }
        return path;
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerService.prototype.unsetField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (field) {
            if (field.fieldArray) {
                this.unsetField(field.fieldArray);
            }
            if (field.fieldGroup) {
                field.fieldGroup.forEach((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return _this.unsetField(f); }));
            }
            if (field.formControl) {
                /** @type {?} */
                var path = this.path(field.formControl);
                Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"])(this.model, path);
            }
        }
    };
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    FormlyDesignerService.prototype.removeControl = /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var parent = control ? control.parent : undefined;
        if (parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]) {
            for (var key in parent.controls) {
                if (parent.controls[key] === control) {
                    parent.removeControl(key);
                    return;
                }
            }
        }
        else if (parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]) {
            for (var i = 0; i < parent.length; i++) {
                if (parent.at(i) === control) {
                    parent.removeAt(i);
                    return;
                }
            }
        }
    };
    FormlyDesignerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    FormlyDesignerService.ctorParameters = function () { return [
        { type: FormlyDesignerConfig },
        { type: FieldsService },
        { type: _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyConfig"] }
    ]; };
    return FormlyDesignerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerFieldWrapperComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FormlyDesignerFieldWrapperComponent, _super);
    function FormlyDesignerFieldWrapperComponent(changeDetector, designerConfig, elementRef, fieldsService, formlyDesignerService, zone) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.designerConfig = designerConfig;
        _this.elementRef = elementRef;
        _this.fieldsService = fieldsService;
        _this.formlyDesignerService = formlyDesignerService;
        _this.zone = zone;
        _this.editing = false;
        _this.fieldEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({});
        _this.fieldWrappers = [];
        _this.wrappers = [];
        return _this;
    }
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.type = this.field.type;
        this.wrappers = Object.getOwnPropertyNames(this.designerConfig.wrappers);
        this.fieldWrappers = this.formlyDesignerService.getWrappers(this.formlyDesignerService.convertField(this.field)) || [];
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkDesigner(); })); }));
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkDesigner(); })); }));
    };
    Object.defineProperty(FormlyDesignerFieldWrapperComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formlyDesignerService.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} wrapper
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.addWrapper = /**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        /** @type {?} */
        var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        if (field.wrappers) {
            field.wrappers.push(wrapper);
        }
        else {
            field.wrappers = [wrapper];
        }
        this.formlyDesignerService.updateField(this.field, field);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.removeWrapper = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        this.fieldWrappers.splice(index, 1);
        field.wrappers = this.fieldWrappers;
        this.formlyDesignerService.updateField(this.field, field);
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editing = true;
        this.formlyDesignerService.disabled = true;
        /** @type {?} */
        var editFields = this.formlyDesignerService.convertField(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field));
        this.fieldEdit.setValue(editFields);
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.formlyDesignerService.removeField(this.field);
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.fieldsService.checkField(this.fieldEdit.value, this.formlyDesignerService.fields)) {
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().subscribe((/**
         * @return {?}
         */
        function () {
            _this.formlyDesignerService.updateField(_this.field, _this.fieldEdit.value);
            _this.formlyDesignerService.disabled = false;
            _this.editing = false;
        }));
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.formlyDesignerService.disabled = false;
        this.editing = false;
    };
    /**
     * @private
     * @return {?}
     */
    FormlyDesignerFieldWrapperComponent.prototype.checkDesigner = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = (/** @type {?} */ (this.elementRef.nativeElement));
        if (element.parentNode == null) {
            return;
        }
        /** @type {?} */
        var designerEmpty = element.querySelector('formly-designer-wrapper') == null;
        if (designerEmpty !== element.classList.contains('designerEmpty')) {
            this.changeDetector.detectChanges();
            if (designerEmpty) {
                element.classList.add('designerEmpty');
            }
            else {
                element.classList.remove('designerEmpty');
            }
        }
    };
    FormlyDesignerFieldWrapperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-field-wrapper',
                    template: "\n        <div *ngIf=\"!editing\" class=\"bg-info text-white control-panel\">\n            <span class=\"type\">{{ type }}</span>\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\" title=\"wrappers\">\n                    <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <button class=\"dropdown-item\" type=\"button\" [disabled]=\"disabled\" title=\"add wrapper\"\n                        *ngFor=\"let wrapper of wrappers\" (click)=\"addWrapper(wrapper)\">\n                        {{ wrapper }}\n                    </button>\n                    <ng-container *ngIf=\"fieldWrappers.length\">\n                        <div *ngIf=\"wrappers.length\" class=\"dropdown-divider\"></div>\n                        <button class=\"dropdown-item\" type=\"button\" [disabled]=\"disabled\"\n                            *ngFor=\"let wrapper of fieldWrappers; let i=index\" (click)=\"removeWrapper(i)\">\n                            {{ wrapper }}&nbsp;&nbsp;<i class=\"fa fa-times\" aria-hidden=\"true\" title=\"remove wrapper\"></i>\n                        </button>\n                    </ng-container>\n                </div>\n            </div>\n            <button class=\"btn\" type=\"button\" [disabled]=\"disabled\" (click)=\"edit()\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"edit\"></i>\n            </button>\n            <button class=\"btn\" type=\"button\" [disabled]=\"disabled\" (click)=\"remove()\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\" title=\"remove\"></i>\n            </button>\n        </div>\n        <div class=\"content\">\n            <div class=\"editor\" [hidden]=\"!editing\">\n                <formly-designer-field-editor #editor [hasContent]=\"true\" [showType]=\"true\" [showWrappers]=\"true\" [formControl]=\"fieldEdit\">\n                    <div class=\"footer\">\n                        <button (click)=\"cancel()\" class=\"btn btn-secondary mr-1\">Cancel</button>\n                        <button [disabled]=\"editor.invalid\" (click)=\"accept()\" class=\"btn btn-primary\">Apply</button>\n                    </div>\n                </formly-designer-field-editor>\n            </div>\n            <div [hidden]=\"editing\">\n                <ng-template #fieldComponent></ng-template>\n            </div>\n        </div>\n    ",
                    styles: ["\n        :host {\n            display: flex;\n            position: relative;\n            justify-content: flex-start;\n            align-content: flex-start;\n            align-items: flex-start;\n            margin: .25em;\n        }\n        :host.designerEmpty {\n            display:none;\n        }\n        .btn:not(:disabled), .dropdown-item:not(:disabled) {\n            cursor: pointer;\n        }\n        .control-panel {\n            font-size: .8em;\n            position: absolute;\n            padding: 0 0 0 .5em;\n            border-radius: 0 5px 0 0;\n            right: 0;\n            top: 0;\n        }\n        .control-panel > * {\n            padding-right: .5em;\n        }\n        .control-panel .btn {\n            font-size: unset;\n            background-color: unset;\n            padding: 0 .5em 0 0;\n            color: #fff;\n        }\n        .content {\n            border: 1px dashed #000;\n            border-radius: 5px;\n            min-height: 2em;\n            padding: 1.5em 1em 0 1em;\n            width: 100%;\n        }\n        .content:first-child {\n            padding-top: 0;\n        }\n        .editor {\n            margin: 1em 0;\n        }\n        .footer {\n            display: flex;\n            justify-content: flex-end;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormlyDesignerFieldWrapperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"] },
        { type: FormlyDesignerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: FieldsService },
        { type: FormlyDesignerService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] }
    ]; };
    FormlyDesignerFieldWrapperComponent.propDecorators = {
        fieldComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"] },] }]
    };
    return FormlyDesignerFieldWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FieldWrapper"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerFieldGroupWrapperComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FormlyDesignerFieldGroupWrapperComponent, _super);
    function FormlyDesignerFieldGroupWrapperComponent(changeDetector, designerConfig, elementRef, fieldsService, formlyDesignerService, zone) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.designerConfig = designerConfig;
        _this.elementRef = elementRef;
        _this.fieldsService = fieldsService;
        _this.formlyDesignerService = formlyDesignerService;
        _this.zone = zone;
        _this.editing = false;
        _this.fieldEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({});
        _this.fieldWrappers = [];
        _this.wrappers = [];
        return _this;
    }
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.field.templateOptions.$fieldArray) {
            this.type = this.field.templateOptions.$fieldArray.type || 'fieldArray';
        }
        else if (this.field.type) {
            this.type = this.field.type;
        }
        else if (this.field.fieldGroup) {
            this.type = 'fieldGroup';
        }
        this.wrappers = Object.getOwnPropertyNames(this.designerConfig.wrappers);
        this.fieldWrappers = this.formlyDesignerService.convertField(this.field).wrappers || [];
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkDesigner(); })); }));
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkDesigner(); })); }));
    };
    Object.defineProperty(FormlyDesignerFieldGroupWrapperComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formlyDesignerService.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} wrapper
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.addWrapper = /**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        /** @type {?} */
        var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        if (field.wrappers) {
            field.wrappers.push(wrapper);
        }
        else {
            field.wrappers = [wrapper];
        }
        this.formlyDesignerService.updateField(this.field, field);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.removeWrapper = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        this.fieldWrappers.splice(index, 1);
        field.wrappers = this.fieldWrappers;
        this.formlyDesignerService.updateField(this.field, field);
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editing = true;
        this.formlyDesignerService.disabled = true;
        this.fieldEdit.setValue(this.formlyDesignerService.convertField(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field)));
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.formlyDesignerService.removeField(this.field);
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.fieldsService.checkField(this.fieldEdit.value, this.formlyDesignerService.fields)) {
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().subscribe((/**
         * @return {?}
         */
        function () {
            _this.formlyDesignerService.updateField(_this.field, _this.fieldEdit.value);
            _this.formlyDesignerService.disabled = false;
            _this.editing = false;
        }));
    };
    /**
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.formlyDesignerService.disabled = false;
        this.editing = false;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.onFieldSelected = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (isArray(this.field.fieldGroup) &&
            !this.fieldsService.checkField(field, this.formlyDesignerService.fields, this.field)) {
            return;
        }
        /** @type {?} */
        var updatedField = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        updatedField.fieldGroup = isArray(updatedField.fieldGroup) ? updatedField.fieldGroup.slice() : [];
        updatedField.fieldGroup.push(field);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @return {?}
         */
        function () { return _this.formlyDesignerService.updateField(_this.field, updatedField); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((/**
         * @return {?}
         */
        function () { return rxjs__WEBPACK_IMPORTED_MODULE_5__["NEVER"]; })))
            .subscribe();
    };
    /**
     * @private
     * @return {?}
     */
    FormlyDesignerFieldGroupWrapperComponent.prototype.checkDesigner = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = (/** @type {?} */ (this.elementRef.nativeElement));
        if (element.parentNode == null) {
            return;
        }
        /** @type {?} */
        var designerEmpty = element.querySelector('formly-designer-wrapper') == null;
        if (designerEmpty !== element.classList.contains('designerEmpty')) {
            this.changeDetector.detectChanges();
            if (designerEmpty) {
                element.classList.add('designerEmpty');
            }
            else {
                element.classList.remove('designerEmpty');
            }
        }
    };
    FormlyDesignerFieldGroupWrapperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-field-group-wrapper',
                    template: "\n        <div *ngIf=\"!editing\" class=\"bg-info text-white control-panel\">\n            <span class=\"type\">{{ type }}</span>\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\" title=\"wrappers\">\n                    <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <button class=\"dropdown-item\" type=\"button\" [disabled]=\"disabled\" title=\"add wrapper\"\n                        *ngFor=\"let wrapper of wrappers\" (click)=\"addWrapper(wrapper)\">\n                        {{ wrapper }}\n                    </button>\n                    <ng-container *ngIf=\"fieldWrappers.length\">\n                        <div *ngIf=\"wrappers.length\" class=\"dropdown-divider\"></div>\n                        <button class=\"dropdown-item\" type=\"button\" [disabled]=\"disabled\"\n                            *ngFor=\"let wrapper of fieldWrappers; let i=index\" (click)=\"removeWrapper(i)\">\n                            {{ wrapper }}&nbsp;&nbsp;<i class=\"fa fa-times\" aria-hidden=\"true\" title=\"remove wrapper\"></i>\n                        </button>\n                    </ng-container>\n                </div>\n            </div>\n            <button [disabled]=\"disabled\" type=\"button\" class=\"btn\" (click)=\"edit()\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"edit\"></i>\n            </button>\n            <button [disabled]=\"disabled\" type=\"button\" class=\"btn\" (click)=\"remove()\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\" title=\"remove\"></i>\n            </button>\n        </div>\n        <div class=\"content\">\n            <div [hidden]=\"!editing\">\n                <formly-designer-field-editor #editor [hasContent]=\"true\" [showWrappers]=\"true\" [formControl]=\"fieldEdit\">\n                    <div class=\"footer\">\n                        <button (click)=\"cancel()\" class=\"btn btn-secondary mr-1\">Cancel</button>\n                        <button [disabled]=\"editor.invalid\" (click)=\"accept()\" class=\"btn btn-primary\">Apply</button>\n                    </div>\n                </formly-designer-field-editor>\n            </div>\n            <div [hidden]=\"editing\">\n                <div class=\"form-group\">\n                    <label>child</label>\n                    <formly-designer-field-picker (selected)=\"onFieldSelected($event)\"></formly-designer-field-picker>\n                </div>\n                <ng-template #fieldComponent></ng-template>\n            </div>\n        </div>\n    ",
                    styles: ["\n        :host {\n            display: flex;\n            position: relative;\n            justify-content: flex-start;\n            align-content: flex-start;\n            align-items: flex-start;\n            margin: .25em;\n        }\n        :host.designerEmpty {\n            display:none;\n        }\n        .btn:not(:disabled), .dropdown-item:not(:disabled) {\n            cursor: pointer;\n        }\n        .control-panel {\n            font-size: .8em;\n            position: absolute;\n            padding: 0 0 0 .5em;\n            border-radius: 0 5px 0 0;\n            right: 0;\n            top: 0;\n        }\n        .control-panel > * {\n            padding-right: .5em;\n        }\n        .control-panel .btn {\n            font-size: unset;\n            background-color: unset;\n            padding: 0 .5em 0 0;\n            color: #fff;\n        }\n        .content {\n            border: 1px dashed #000;\n            border-radius: 5px;\n            padding: 1em;\n            width: 100%;\n        }\n        .footer {\n            display: flex;\n            justify-content: flex-end;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormlyDesignerFieldGroupWrapperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"] },
        { type: FormlyDesignerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] },
        { type: FieldsService },
        { type: FormlyDesignerService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"] }
    ]; };
    FormlyDesignerFieldGroupWrapperComponent.propDecorators = {
        fieldComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"] },] }]
    };
    return FormlyDesignerFieldGroupWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FieldWrapper"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TemplateDesigner = /** @class */ (function () {
    function TemplateDesigner() {
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    TemplateDesigner.prototype.isNonDesignerField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field && (!field.templateOptions || field.templateOptions['$designerField'] !== true);
    };
    /**
     * @param {?} fc
     * @return {?}
     */
    TemplateDesigner.prototype.run = /**
     * @param {?} fc
     * @return {?}
     */
    function (fc) {
        var _this = this;
        fc.templateManipulators.preWrapper.push((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (_this.isNonDesignerField(field)) {
                return field.fieldGroup ? 'fieldGroupDesigner' : 'fieldDesigner';
            }
        }));
        fc.templateManipulators.postWrapper.push((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (_this.isNonDesignerField(field)) {
                return 'designer';
            }
        }));
    };
    return TemplateDesigner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fieldComponents = [];
/** @type {?} */
var wrapperComponents = [
    FormlyDesignerWrapperComponent,
    FormlyDesignerFieldWrapperComponent,
    FormlyDesignerFieldGroupWrapperComponent
];
/** @type {?} */
var config = {
    wrappers: [
        { name: 'designer', component: FormlyDesignerWrapperComponent },
        { name: 'fieldDesigner', component: FormlyDesignerFieldWrapperComponent },
        { name: 'fieldGroupDesigner', component: FormlyDesignerFieldGroupWrapperComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerComponent = /** @class */ (function () {
    function FormlyDesignerComponent(fieldsService, formBuilder, formlyDesignerService) {
        this.fieldsService = fieldsService;
        this.formBuilder = formBuilder;
        this.formlyDesignerService = formlyDesignerService;
        this.fieldsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.types = [];
        this.wrappers = [];
        this.properties = [];
        this.debugFields = [];
        this.options = {};
        this.subscriptions = [];
    }
    Object.defineProperty(FormlyDesignerComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formlyDesignerService.disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formlyDesignerService.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formlyDesignerService.fields;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var fields = this.formlyDesignerService.convertFields(value);
            this.fieldsService.mutateFields(fields, false);
            this.formlyDesignerService.fields = fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyDesignerComponent.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formlyDesignerService.model;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formlyDesignerService.model = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormlyDesignerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Designer forms will be restricted to a single field depth; all designer keys should be
        // complex (e.g. "templateOptions.some.property")
        this.form = this.formBuilder.group({});
        this.subscriptions.push(this.formlyDesignerService.fields$
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.form = _this.formBuilder.group({});
            _this.fieldsChange.emit(_this.formlyDesignerService.createDesignerFields());
        })));
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.formlyDesignerService.model$, this.form.valueChanges)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(50))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.modelChange.emit(_this.formlyDesignerService.model); })));
    };
    /**
     * @return {?}
     */
    FormlyDesignerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.splice(0).forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyDesignerComponent.prototype.onFieldSelected = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @return {?}
         */
        function () {
            if (_this.fieldsService.checkField(field, _this.formlyDesignerService.fields)) {
                _this.formlyDesignerService.addField(field);
            }
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((/**
         * @return {?}
         */
        function () { return rxjs__WEBPACK_IMPORTED_MODULE_5__["NEVER"]; }))).subscribe();
    };
    FormlyDesignerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer',
                    template: "\n        <formly-designer-field-picker (selected)=\"onFieldSelected($event)\">\n        </formly-designer-field-picker>\n        <form novalidate [formGroup]=\"form\">\n            <formly-form [options]=\"options\" [model]=\"model\" [form]=\"form\" [fields]=\"fields\">\n            </formly-form>\n        </form>\n        <!--<div>\n            Designer Fields Debug:\n            <pre>{{ fields | decycle | json }}</pre>\n        </div>-->\n    ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
                    providers: [FormlyDesignerService],
                    styles: ["\n        formly-designer-field-picker .form-group > .input-group > formly-designer-type-select > select {\n            border-radius: .25rem 0 0 .25rem;\n            border-right: 0;\n        }\n        formly-designer-wrapper-editor .card > .card-body .form-control {\n            width: 100%;\n        }\n        formly-designer-wrapper-picker .form-group > .input-group > formly-designer-wrapper-select > select {\n            border-radius: .25rem 0 0 .25rem;\n            border-right: 0;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormlyDesignerComponent.ctorParameters = function () { return [
        { type: FieldsService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: FormlyDesignerService }
    ]; };
    FormlyDesignerComponent.propDecorators = {
        formlyFormContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['formlyFormContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"] },] }],
        fieldsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        fields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return FormlyDesignerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FIELD_EDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])((/**
     * @return {?}
     */
    function () { return FieldEditorComponent; })),
    multi: true
};
var FieldEditorComponent = /** @class */ (function () {
    function FieldEditorComponent(fieldsService, formBuilder, formlyDesignerConfig) {
        var _this = this;
        this.fieldsService = fieldsService;
        this.formBuilder = formBuilder;
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.subscriptions = [];
        this.field = {};
        this.fields = [];
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.form = formBuilder.group({
            key: [''],
            className: [''],
            type: ['']
        }, { validator: (/**
             * @param {?} control
             * @return {?}
             */
            function (control) { return _this.validator(control); }) });
        this.fieldForm = formBuilder.group({});
    }
    Object.defineProperty(FieldEditorComponent.prototype, "key", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.form.get('key')));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldEditorComponent.prototype, "className", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.form.get('className')));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldEditorComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.form.get('type')));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.type.valueChanges
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.onTypeChange(); })));
        this.subscriptions.push(this.form.statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.invalid = _this.form.invalid; })));
        this.subscribeValueChanges();
    };
    /**
     * @return {?}
     */
    FieldEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChangesSubscription.unsubscribe();
        this.subscriptions.splice(0).forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    FieldEditorComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.valueChangesSubscription.unsubscribe();
        this.updateField(obj);
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.subscribeValueChanges();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FieldEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FieldEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FieldEditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.form.disable();
        }
        else {
            this.form.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FieldEditorComponent.prototype.subscribeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChangesSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.fieldForm.valueChanges, this.form.valueChanges)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateValue(); }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldEditorComponent.prototype.updateField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!isObject(field)) {
            field = {};
        }
        this.key.setValue(isString(field.key) ? field.key : '');
        this.className.setValue(isString(field.className) ? field.className : '');
        this.type.setValue(isString(field.type) ? field.type : '');
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        this.fieldForm = this.formBuilder.group({});
        this.field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(field);
    };
    /**
     * @private
     * @return {?}
     */
    FieldEditorComponent.prototype.updateValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.onChange) {
            return;
        }
        /** @type {?} */
        var field = this.field;
        field.key = this.key.value;
        field.className = this.className.value;
        field.type = this.type.value;
        this.onChange(field);
    };
    /**
     * @private
     * @return {?}
     */
    FieldEditorComponent.prototype.onTypeChange = /**
     * @private
     * @return {?}
     */
    function () {
        this.valueChangesSubscription.unsubscribe();
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        /** @type {?} */
        var designerType = this.formlyDesignerConfig.types[this.type.value];
        this.fieldArray = designerType ? designerType.fieldArray : false;
        this.fieldForm = this.formBuilder.group({});
        this.field = Object.assign({}, this.field);
        this.subscribeValueChanges();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldEditorComponent.prototype.onWrappersSelected = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.updateField(field);
    };
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    FieldEditorComponent.prototype.validator = /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var type = (/** @type {?} */ (control.get('type')));
        /** @type {?} */
        var hasType = isString(type.value) && type.value.trim().length > 0;
        /** @type {?} */
        var key = (/** @type {?} */ (control.get('key')));
        /** @type {?} */
        var result = { key: false, type: this.showType && !hasType, conflict: false };
        if (hasType && (!isString(key.value) || key.value.trim().length === 0)) {
            result.key = true;
        }
        return result.key || result.type ? result : null;
    };
    FieldEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-field-editor',
                    template: "\n        <form [formGroup]=\"form\" novalidate>\n            <div class=\"card\">\n                <div class=\"card-header\" [ngClass]=\"{solo: !hasContent && fields.length === 0}\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-danger': form.hasError('key') && (key.dirty || key.touched)}\">\n                        <label class=\"form-control-label\">key</label>\n                        <input formControlName=\"key\" class=\"form-control\">\n                        <div *ngIf=\"form.hasError('key') && (key.dirty || key.touched)\" class=\"form-control-feedback\">\n                            key required.\n                        </div>\n                    </div>\n                    <div *ngIf=\"formlyDesignerConfig.settings.showClassName\" class=\"form-group\">\n                        <label class=\"form-control-label\">className</label>\n                        <input formControlName=\"className\" class=\"form-control\">\n                    </div>\n                    <div *ngIf=\"showType\" class=\"form-group\"\n                        [ngClass]=\"{'has-danger': form.hasError('type') && (type.dirty || type.touched)}\">\n                        <label class=\"form-control-label\">type</label>\n                        <formly-designer-type-select formControlName=\"type\"></formly-designer-type-select>\n                        <div *ngIf=\"form.hasError('type') && (type.dirty || type.touched)\" class=\"form-control-feedback\">\n                            type required.\n                        </div>\n                    </div>\n                    <div *ngIf=\"showWrappers\" class=\"form-group\">\n                        <label class=\"form-control-label\">wrappers</label>\n                        <formly-designer-wrappers-picker [field]=\"field\"\n                            (selected)=\"onWrappersSelected($event)\">\n                        </formly-designer-wrappers-picker>\n                    </div>\n                </div>\n                <div #block class=\"card-body\">\n                    <formly-form *ngIf=\"fields.length > 0\" [form]=\"fieldForm\" [fields]=\"fields\" [model]=\"field\">\n                    </formly-form>\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </form>\n    ",
                    providers: [
                        FIELD_EDITOR_CONTROL_VALUE_ACCESSOR
                    ],
                    styles: ["\n        .card-header.solo {\n            border-bottom: 0;\n        }\n        .card-header.solo + .card-body {\n            display: none;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    FieldEditorComponent.ctorParameters = function () { return [
        { type: FieldsService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: FormlyDesignerConfig }
    ]; };
    FieldEditorComponent.propDecorators = {
        showType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        showWrappers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        hasContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        blockElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['block',] }]
    };
    return FieldEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldPickerComponent = /** @class */ (function () {
    function FieldPickerComponent(formBuilder, formlyDesignerConfig) {
        this.formBuilder = formBuilder;
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.fieldEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({});
    }
    Object.defineProperty(FieldPickerComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.get('type').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldPickerComponent.prototype, "$modal", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ($(this.modalRef.nativeElement)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^\s*\S.*$/)])]
        });
    };
    /**
     * @return {?}
     */
    FieldPickerComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var type = this.type;
        if (type === 'fieldGroup') {
            this.fieldEdit.setValue({
                fieldGroup: []
            });
        }
        else {
            /** @type {?} */
            var field = (/** @type {?} */ ({ type: type }));
            if (this.formlyDesignerConfig.types[type].fieldArray) {
                field.fieldArray = { fieldGroup: [] };
            }
            this.fieldEdit.setValue(field);
        }
        this.$modal.modal('show');
    };
    /**
     * @return {?}
     */
    FieldPickerComponent.prototype.onApply = /**
     * @return {?}
     */
    function () {
        this.selected.emit(this.fieldEdit.value);
        this.$modal.modal('hide');
    };
    FieldPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-field-picker',
                    template: "\n        <form novalidate [formGroup]=\"form\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <formly-designer-type-select formControlName=\"type\">\n                    </formly-designer-type-select>\n                    <button type=\"button\" class=\"btn btn-secondary\" [disabled]=\"form.invalid\" (click)=\"add()\">\n                        Add\n                    </button>\n                </div>\n            </div>\n            <div #modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\">Add {{ type }}</h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Cancel\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <formly-designer-field-editor #editor [formControl]=\"fieldEdit\">\n                            </formly-designer-field-editor>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onApply()\"\n                                [disabled]=\"editor.invalid\">Apply</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    ",
                    styles: ["\n        .btn:not(:disabled) {\n            cursor: pointer;\n        }\n        .input-group > .btn {\n            border-radius: 0 .25rem .25rem 0;\n        }\n        .input-group, .modal-header {\n            display: flex;\n        }\n        .modal-header {\n            justify-content: space-between;\n        }\n        formly-designer-type-select {\n            flex-grow: 2;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    FieldPickerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: FormlyDesignerConfig }
    ]; };
    FieldPickerComponent.propDecorators = {
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['modal',] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return FieldPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TYPE_SELECT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])((/**
     * @return {?}
     */
    function () { return TypeSelectComponent; })),
    multi: true
};
var TypeSelectComponent = /** @class */ (function () {
    function TypeSelectComponent(formlyDesignerConfig) {
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    TypeSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().subscribe((/**
         * @return {?}
         */
        function () {
            _this.types = Object.keys(_this.formlyDesignerConfig.types);
            if (_this.types.length > 0) {
                _this.formControl.setValue(_this.types[0]);
            }
            _this.types.push('fieldGroup');
        }));
    };
    /**
     * @return {?}
     */
    TypeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChangesSubscription = this.formControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.onChange) {
                _this.onChange(value);
            }
        }));
    };
    /**
     * @return {?}
     */
    TypeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChangesSubscription.unsubscribe();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    TypeSelectComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.formControl.setValue(obj);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TypeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TypeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TypeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    };
    TypeSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-type-select',
                    template: "\n        <select [formControl]=\"formControl\" class=\"custom-select\">\n            <option *ngFor=\"let type of types\" [ngValue]=\"type\">{{ type }}</option>\n        </select>\n    ",
                    providers: [TYPE_SELECT_CONTROL_VALUE_ACCESSOR],
                    styles: ["\n        select {\n            width: 100%;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    TypeSelectComponent.ctorParameters = function () { return [
        { type: FormlyDesignerConfig }
    ]; };
    return TypeSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WRAPPER_EDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])((/**
     * @return {?}
     */
    function () { return WrapperEditorComponent; })),
    multi: true
};
var WrapperEditorComponent = /** @class */ (function () {
    function WrapperEditorComponent(fieldsService, formBuilder) {
        this.fieldsService = fieldsService;
        this.formBuilder = formBuilder;
        this.subscriptions = [];
        this.fields = [];
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.fieldForm = formBuilder.group({});
    }
    /**
     * @return {?}
     */
    WrapperEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.fieldForm.statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((/**
         * @return {?}
         */
        function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(); })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.invalid = _this.fieldForm.invalid; })));
        this.subscribeValueChanges();
    };
    /**
     * @return {?}
     */
    WrapperEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChangesSubscription.unsubscribe();
        this.subscriptions.splice(0).forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WrapperEditorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.wrapper) {
            if (this.valueChangesSubscription) {
                this.valueChangesSubscription.unsubscribe();
            }
            this.fields = this.fieldsService.getWrapperFields(this.wrapper);
            this.fieldForm = this.formBuilder.group({});
            this.field = Object.assign({}, this.field);
            if (this.valueChangesSubscription) {
                this.subscribeValueChanges();
            }
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    WrapperEditorComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.valueChangesSubscription.unsubscribe();
        if (!isObject(obj)) {
            obj = {};
        }
        this.fields = this.fieldsService.getWrapperFields(this.wrapper);
        this.fieldForm = this.formBuilder.group({});
        this.field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(obj);
        this.subscribeValueChanges();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    WrapperEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    WrapperEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    WrapperEditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.fieldForm.disable();
        }
        else {
            this.fieldForm.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    WrapperEditorComponent.prototype.subscribeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChangesSubscription = this.fieldForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateValue(); }));
    };
    /**
     * @private
     * @return {?}
     */
    WrapperEditorComponent.prototype.updateValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.onChange) {
            return;
        }
        this.onChange(this.field);
    };
    WrapperEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-wrapper-editor',
                    template: "\n        <form [formGroup]=\"fieldForm\" novalidate>\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <formly-form [form]=\"fieldForm\" [fields]=\"fields\" [model]=\"field\">\n                    </formly-form>\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </form>\n    ",
                    providers: [
                        WRAPPER_EDITOR_CONTROL_VALUE_ACCESSOR
                    ]
                }] }
    ];
    /** @nocollapse */
    WrapperEditorComponent.ctorParameters = function () { return [
        { type: FieldsService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    WrapperEditorComponent.propDecorators = {
        wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    return WrapperEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])((/**
     * @return {?}
     */
    function () { return WrapperSelectComponent; })),
    multi: true
};
var WrapperSelectComponent = /** @class */ (function () {
    function WrapperSelectComponent(formlyDesignerConfig) {
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    WrapperSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().subscribe((/**
         * @return {?}
         */
        function () {
            _this.wrappers = Object.keys(_this.formlyDesignerConfig.wrappers);
            if (_this.wrappers.length > 0) {
                _this.formControl.setValue(_this.wrappers[0]);
            }
        }));
    };
    /**
     * @return {?}
     */
    WrapperSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChangesSubscription = this.formControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.onChange) {
                _this.onChange(value);
            }
        }));
    };
    /**
     * @return {?}
     */
    WrapperSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChangesSubscription.unsubscribe();
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    WrapperSelectComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.formControl.setValue(obj);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    WrapperSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    WrapperSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    WrapperSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    };
    WrapperSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-wrapper-select',
                    template: "\n        <select [formControl]=\"formControl\" class=\"custom-select\">\n            <option *ngFor=\"let wrapper of wrappers\" [ngValue]=\"wrapper\">{{ wrapper }}</option>\n        </select>\n    ",
                    providers: [WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR],
                    styles: ["\n        select {\n            width: 100%;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    WrapperSelectComponent.ctorParameters = function () { return [
        { type: FormlyDesignerConfig }
    ]; };
    return WrapperSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WrapperPickerComponent = /** @class */ (function () {
    function WrapperPickerComponent(formBuilder, formlyDesignerConfig, formlyDesignerService) {
        this.formBuilder = formBuilder;
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.formlyDesignerService = formlyDesignerService;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.fieldEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({});
    }
    Object.defineProperty(WrapperPickerComponent.prototype, "wrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.get('wrapper').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WrapperPickerComponent.prototype, "$modal", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return $(this.modalRef.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WrapperPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.formBuilder.group({
            wrapper: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^\s*\S.*$/)])]
        });
    };
    /**
     * @return {?}
     */
    WrapperPickerComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        if (isObject(this.field)) {
            /** @type {?} */
            var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
            if (isArray(field.wrappers) && field.wrappers.length > 0) {
                field.wrappers.splice(field.wrappers.length - 1, 0, this.wrapper);
            }
            else {
                field.wrappers = [this.wrapper];
            }
            this.fieldEdit.setValue(field);
            /** @type {?} */
            var fields = this.formlyDesignerConfig.wrappers[this.wrapper].fields;
            if (isArray(fields) && fields.length > 0) {
                this.$modal.modal('show');
            }
            else {
                this.onApply();
            }
        }
    };
    /**
     * @return {?}
     */
    WrapperPickerComponent.prototype.onApply = /**
     * @return {?}
     */
    function () {
        this.field = this.formlyDesignerService.convertField(this.fieldEdit.value);
        this.selected.emit(this.fieldEdit.value);
        this.$modal.modal('hide');
    };
    WrapperPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-wrapper-picker',
                    template: "\n        <form novalidate [formGroup]=\"form\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <formly-designer-wrapper-select formControlName=\"wrapper\">\n                    </formly-designer-wrapper-select>\n                    <button type=\"button\" class=\"btn btn-secondary\" [disabled]=\"form.invalid\" (click)=\"add()\">\n                        Add\n                    </button>\n                </div>\n            </div>\n            <div #modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\">Add {{ wrapper }}</h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Cancel\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <formly-designer-wrapper-editor #editor [formControl]=\"fieldEdit\" [wrapper]=\"wrapper\">\n                            </formly-designer-wrapper-editor>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onApply()\"\n                                [disabled]=\"editor.invalid\">Apply</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    ",
                    styles: ["\n        :host {\n            width: inherit;\n        }\n        .btn:not(:disabled) {\n            cursor: pointer;\n        }\n        .input-group > .btn {\n            border-radius: 0 .25rem .25rem 0;\n        }\n        .input-group, .modal-header {\n            display: flex;\n        }\n        .modal-header {\n            justify-content: space-between;\n        }\n        formly-designer-wrapper-select {\n            flex-grow: 2;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    WrapperPickerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: FormlyDesignerConfig },
        { type: FormlyDesignerService }
    ]; };
    WrapperPickerComponent.propDecorators = {
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['modal',] }],
        field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return WrapperPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WrappersPickerComponent = /** @class */ (function () {
    function WrappersPickerComponent(formlyDesignerConfig, formlyDesignerService) {
        this.formlyDesignerConfig = formlyDesignerConfig;
        this.formlyDesignerService = formlyDesignerService;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.fieldEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({});
        this.wrappers = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    WrappersPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.field) {
            this.wrappers = this.formlyDesignerService.getWrappers(changes.field.currentValue);
        }
    };
    Object.defineProperty(WrappersPickerComponent.prototype, "$modal", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ($(this.modalRef.nativeElement)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} field
     * @return {?}
     */
    WrappersPickerComponent.prototype.onWrapperSelected = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.selected.emit(field);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    WrappersPickerComponent.prototype.edit = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.wrapper = this.wrappers[index];
        if (isObject(this.field)) {
            /** @type {?} */
            var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
            if (isArray(field.wrappers)) {
                this.fieldEdit.setValue(field);
                /** @type {?} */
                var fields = this.formlyDesignerConfig.wrappers[this.wrapper].fields;
                if (isArray(fields) && fields.length > 0) {
                    this.$modal.modal('show');
                }
                else {
                    this.onApply();
                }
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    WrappersPickerComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var fieldWrappersIndex = this.field.wrappers.indexOf(this.wrappers[index]);
        if (fieldWrappersIndex < 0) {
            return;
        }
        /** @type {?} */
        var field = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.field);
        field.wrappers.splice(fieldWrappersIndex, 1);
        this.field = this.formlyDesignerService.convertField(field);
        this.selected.emit(this.field);
    };
    /**
     * @return {?}
     */
    WrappersPickerComponent.prototype.onApply = /**
     * @return {?}
     */
    function () {
        this.field = this.formlyDesignerService.convertField(this.fieldEdit.value);
        this.selected.emit(this.field);
        this.$modal.modal('hide');
    };
    WrappersPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: 'formly-designer-wrappers-picker',
                    template: "\n        <div class=\"form-group\">\n            <div class=\"input-group\">\n                <formly-designer-wrapper-picker [field]=\"field\" (selected)=\"onWrapperSelected($event)\">\n                </formly-designer-wrapper-picker>\n            </div>\n            <div *ngFor=\"let wrapper of wrappers; let i = index\" class=\"badge badge-default noselect\" (click)=\"edit(i)\">\n                {{ wrapper }}&nbsp;&nbsp;<i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"remove(i)\"></i>\n            </div>\n        </div>\n        <div #modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Edit {{ wrapper }}</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Cancel\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <formly-designer-wrapper-editor #editor [formControl]=\"fieldEdit\" [wrapper]=\"wrapper\">\n                        </formly-designer-wrapper-editor>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onApply()\"\n                            [disabled]=\"editor.invalid\">Apply</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    styles: ["\n        .badge {\n            margin-right: .25em;\n        }\n        .badge {\n            cursor: pointer;\n        }\n        .noselect {\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    WrappersPickerComponent.ctorParameters = function () { return [
        { type: FormlyDesignerConfig },
        { type: FormlyDesignerService }
    ]; };
    WrappersPickerComponent.propDecorators = {
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['modal',] }],
        field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"] }]
    };
    return WrappersPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function decycle(value) {
    if (value == null) {
        return value;
    }
    /** @type {?} */
    var nextId = 1;
    /** @type {?} */
    var objects = new Map();
    return traverse(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(value), (/**
     * @param {?} key
     * @param {?} v
     * @return {?}
     */
    function (key, v) {
        if (isObject(v)) {
            if (objects.has(v)) {
                /** @type {?} */
                var id = objects.get(v);
                if (!id) {
                    v.$id = id = nextId++;
                    objects.set(v, id);
                }
                return { $ref: id };
            }
            else {
                objects.set(v, 0);
            }
        }
    }));
}
/**
 * @template T
 * @param {?} obj
 * @param {?} replace
 * @return {?}
 */
function traverse(obj, replace) {
    if (isArray(obj)) {
        for (var i = 0; i < ((/** @type {?} */ (obj))).length; i++) {
            traverseValue.bind(obj, i, obj[i], replace)();
        }
    }
    else if (isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                traverseValue.bind(obj, key, obj[key], replace)();
            }
        }
    }
    return obj;
}
/**
 * @param {?} key
 * @param {?} value
 * @param {?} replace
 * @return {?}
 */
function traverseValue(key, value, replace) {
    /** @type {?} */
    var replacement = replace(key, value);
    if (replacement === undefined) {
        traverse(value, replace);
    }
    else {
        this[key] = replacement;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DecyclePipe = /** @class */ (function () {
    function DecyclePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DecyclePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return decycle(value);
    };
    DecyclePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Pipe"], args: [{ name: 'decycle' },] }
    ];
    return DecyclePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormlyDesignerModule = /** @class */ (function () {
    function FormlyDesignerModule(formlyConfig) {
        formlyConfig.addConfig(config);
    }
    /**
     * @param {?=} designerConfig
     * @return {?}
     */
    FormlyDesignerModule.forRoot = /**
     * @param {?=} designerConfig
     * @return {?}
     */
    function (designerConfig) {
        if (designerConfig === void 0) { designerConfig = {}; }
        return {
            ngModule: FormlyDesignerModule,
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: [fieldComponents, wrapperComponents], multi: true },
                { provide: FORMLY_DESIGNER_CONFIG_TOKEN, useValue: designerConfig, multi: true }
            ]
        };
    };
    FormlyDesignerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    declarations: [
                        FieldEditorComponent,
                        FieldPickerComponent,
                        FormlyDesignerComponent,
                        TypeSelectComponent,
                        WrapperEditorComponent,
                        WrapperSelectComponent,
                        WrapperPickerComponent,
                        WrappersPickerComponent,
                        DecyclePipe,
                        fieldComponents,
                        wrapperComponents
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forChild()
                    ],
                    exports: [
                        FormlyDesignerComponent
                    ],
                    providers: [
                        FormlyDesignerConfig,
                        FieldsService
                    ],
                    entryComponents: [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyForm"]]
                },] }
    ];
    /** @nocollapse */
    FormlyDesignerModule.ctorParameters = function () { return [
        { type: _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyConfig"] }
    ]; };
    return FormlyDesignerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-formly-designer.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin:2em\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6\">\r\n        <formly-designer [model]=\"model\" [fields]=\"fields\" class=\"container-fluid\"\r\n            (modelChange)=\"onModelChange($event)\" (fieldsChange)=\"onFieldsChange($event)\">\r\n        </formly-designer>\r\n        <div>\r\n            Fields:\r\n            <pre>{{ designerFields | json }}</pre>\r\n\r\n            Model:\r\n            <pre>{{ designerModel | json }}</pre>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.fields = [];
        this.model = {};
        this.designerFields = [];
    }
    AppComponent.prototype.onFieldsChange = function (fields) {
        this.designerFields = fields;
    };
    AppComponent.prototype.onModelChange = function (model) {
        this.designerModel = model;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var ngx_formly_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-formly-tabs */ "./node_modules/ngx-formly-tabs/fesm5/ngx-formly-tabs.js");
/* harmony import */ var ngx_formly_designer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-formly-designer */ "./dist/ngx-formly-designer/fesm5/ngx-formly-designer.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _designer_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./designer-config */ "./src/app/designer-config.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_expander_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/expander.component */ "./src/app/components/expander.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_expander_component__WEBPACK_IMPORTED_MODULE_11__["ExpanderComponent"],
                _config__WEBPACK_IMPORTED_MODULE_8__["fieldComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_formly_tabs__WEBPACK_IMPORTED_MODULE_6__["FormlyTabsModule"],
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forRoot(_config__WEBPACK_IMPORTED_MODULE_8__["config"]),
                ngx_formly_designer__WEBPACK_IMPORTED_MODULE_7__["FormlyDesignerModule"].forRoot(_designer_config__WEBPACK_IMPORTED_MODULE_9__["designerConfig"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/expander.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/expander.component.ts ***!
  \**************************************************/
/*! exports provided: ExpanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderComponent", function() { return ExpanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpanderComponent = /** @class */ (function () {
    function ExpanderComponent() {
    }
    ExpanderComponent_1 = ExpanderComponent;
    Object.defineProperty(ExpanderComponent.prototype, "showContent", {
        get: function () {
            return this._showContent;
        },
        set: function (value) {
            this._showContent = !!value;
            this.onShowContentChanged();
        },
        enumerable: true,
        configurable: true
    });
    ExpanderComponent.prototype.ngOnInit = function () {
        this.showContent = this.expanded;
    };
    ExpanderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.expanded) {
            this.showContent = this.expanded;
        }
    };
    ExpanderComponent.prototype.toggle = function () {
        this.showContent = !this.showContent;
    };
    ExpanderComponent.prototype.onShowContentChanged = function () {
        this.title = this.showContent ? ExpanderComponent_1.expandedState.title : ExpanderComponent_1.collapsedState.title;
        this.iconClass = this.showContent ? ExpanderComponent_1.expandedState.iconClass : ExpanderComponent_1.collapsedState.iconClass;
    };
    var ExpanderComponent_1;
    ExpanderComponent.expandedState = {
        title: 'Select to collapse',
        iconClass: ['fa', 'fa-chevron-up']
    };
    ExpanderComponent.collapsedState = {
        title: 'Select to expand',
        iconClass: ['fa', 'fa-chevron-down']
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "expanded", void 0);
    ExpanderComponent = ExpanderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'expander',
            template: "\n        <div class=\"header\">\n            <span class=\"toggle noselect\" (click)=\"toggle()\" [attr.title]=\"title\" (dblclick)=\"$event.stopPropagation()\">\n                <i [ngClass]=\"iconClass\"></i>&nbsp;&nbsp;<span class=\"h4\">{{heading}}</span>\n            </span>\n        </div>\n        <div class=\"content\" [class.expanded]=\"showContent\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        :host {\n            margin-top: 1em;\n        }\n        .toggle {\n            cursor: pointer;\n            cursor: hand;\n        }\n        .noselect {\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n        .content {\n            display: none;\n            padding-bottom: 1em;\n        }\n        .content.expanded {\n            display: block;\n        }\n    "]
        })
    ], ExpanderComponent);
    return ExpanderComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: fieldComponents, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldComponents", function() { return fieldComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var _types_custom_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/custom-input */ "./src/app/types/custom-input.ts");
/* harmony import */ var _types_repeat_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/repeat-section */ "./src/app/types/repeat-section.ts");
/* harmony import */ var _wrappers_expander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrappers/expander */ "./src/app/wrappers/expander.ts");




var fieldComponents = [
    _types_custom_input__WEBPACK_IMPORTED_MODULE_1__["FormlyFieldCustomInputComponent"],
    _types_repeat_section__WEBPACK_IMPORTED_MODULE_2__["FormlyFieldRepeatSectionComponent"],
    _wrappers_expander__WEBPACK_IMPORTED_MODULE_3__["FormlyWrapperExpanderComponent"]
];
var config = {
    types: [
        { name: 'extended-input', extends: 'input' },
        { name: 'customInput', component: _types_custom_input__WEBPACK_IMPORTED_MODULE_1__["FormlyFieldCustomInputComponent"] },
        { name: 'repeatSection', component: _types_repeat_section__WEBPACK_IMPORTED_MODULE_2__["FormlyFieldRepeatSectionComponent"] },
        { name: 'multicheckbox', component: _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_0__["FormlyFieldMultiCheckbox"],
            defaultOptions: {
                templateOptions: {
                    options: []
                }
            }
        },
        { name: 'select', component: _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_0__["FormlyFieldSelect"],
            defaultOptions: {
                templateOptions: {
                    options: []
                }
            }
        }
    ],
    wrappers: [
        { name: 'expander', component: _wrappers_expander__WEBPACK_IMPORTED_MODULE_3__["FormlyWrapperExpanderComponent"] }
    ]
};


/***/ }),

/***/ "./src/app/designer-config.ts":
/*!************************************!*\
  !*** ./src/app/designer-config.ts ***!
  \************************************/
/*! exports provided: formlyBootstrapfilterWrapper, designerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formlyBootstrapfilterWrapper", function() { return formlyBootstrapfilterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designerConfig", function() { return designerConfig; });
var reserved = new Set(['label', 'fieldset', 'description', 'validation-message']);
function formlyBootstrapfilterWrapper(wrapper) {
    return reserved.has(wrapper);
}
var designerConfig = {
    settings: {
        filterWrapper: formlyBootstrapfilterWrapper
    },
    types: [
        {
            name: 'input',
            fields: [
                {
                    key: 'templateOptions.label',
                    type: 'input',
                    templateOptions: {
                        label: 'label'
                    }
                },
                {
                    key: 'templateOptions.type',
                    type: 'select',
                    templateOptions: {
                        label: 'type',
                        options: [
                            {
                                label: 'text',
                                value: 'text'
                            },
                            {
                                label: 'number',
                                value: 'number'
                            }
                        ]
                    },
                    defaultValue: 'text'
                },
                {
                    key: 'templateOptions.placeholder',
                    type: 'input',
                    templateOptions: {
                        label: 'placeholder'
                    }
                },
                {
                    key: 'defaultValue',
                    type: 'input',
                    templateOptions: {
                        label: 'default value'
                    }
                },
                {
                    key: 'templateOptions.description',
                    type: 'input',
                    templateOptions: {
                        label: 'description'
                    }
                },
                {
                    key: 'templateOptions.pattern',
                    type: 'input',
                    templateOptions: {
                        label: 'pattern'
                    }
                },
                {
                    key: 'templateOptions.required',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'required'
                    },
                    defaultValue: false
                }
            ]
        },
        {
            name: 'checkbox',
            fields: [
                {
                    key: 'templateOptions.label',
                    type: 'input',
                    templateOptions: {
                        label: 'label'
                    }
                },
                {
                    key: 'defaultValue',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'default value'
                    }
                }
            ]
        },
        {
            name: 'select',
            fields: [
                {
                    key: 'templateOptions.label',
                    type: 'input',
                    templateOptions: {
                        label: 'label'
                    }
                },
                {
                    template: '<div class="mb-3">options</div>'
                },
                {
                    key: 'templateOptions.options',
                    type: 'repeatSection',
                    templateOptions: {
                        canAdd: true,
                        canRemove: true
                    },
                    fieldArray: {
                        className: 'ml-3',
                        fieldGroup: [
                            {
                                key: 'label',
                                type: 'input',
                                templateOptions: {
                                    label: 'label'
                                }
                            },
                            {
                                key: 'value',
                                type: 'input',
                                templateOptions: {
                                    label: 'value'
                                }
                            }
                        ]
                    }
                },
                {
                    template: '<div class="mb-3"></div>'
                },
                {
                    key: 'templateOptions.required',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'required'
                    },
                    defaultValue: false
                }
            ]
        },
        {
            name: 'multicheckbox',
            fields: [
                {
                    key: 'templateOptions.label',
                    type: 'input',
                    templateOptions: {
                        label: 'label'
                    }
                },
                {
                    key: 'templateOptions.options',
                    type: 'repeatSection',
                    templateOptions: {
                        canAdd: true,
                        canRemove: true
                    },
                    fieldArray: {
                        className: 'ml-3',
                        fieldGroup: [
                            {
                                key: 'value',
                                type: 'input',
                                templateOptions: {
                                    label: 'label'
                                }
                            },
                            {
                                key: 'key',
                                type: 'input',
                                templateOptions: {
                                    label: 'value'
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            name: 'repeatSection',
            fieldArray: true
        }
    ],
    wrappers: [
        {
            name: 'expander',
            fields: [
                {
                    key: 'templateOptions.label',
                    type: 'input',
                    templateOptions: {
                        label: 'label'
                    }
                },
                {
                    key: 'templateOptions.expanded',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'expanded'
                    },
                    defaultValue: true
                }
            ]
        },
        {
            name: 'tabset',
            fields: []
        },
        {
            name: 'tab',
            fields: [
                {
                    key: 'templateOptions.tabTitle',
                    type: 'input',
                    templateOptions: {
                        label: 'tabTitle'
                    }
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/types/custom-input.ts":
/*!***************************************!*\
  !*** ./src/app/types/custom-input.ts ***!
  \***************************************/
/*! exports provided: FormlyFieldCustomInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldCustomInputComponent", function() { return FormlyFieldCustomInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormlyFieldCustomInputComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldCustomInputComponent, _super);
    function FormlyFieldCustomInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormlyFieldCustomInputComponent.prototype, "type", {
        get: function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    FormlyFieldCustomInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-formly-field-input',
            template: "\n        <input [type]=\"type\" [formControl]=\"formControl\" class=\"form-control\"\n            [formlyAttributes]=\"field\" [ngClass]=\"{'form-control-danger': formControl.valid}\">\n    ",
        })
    ], FormlyFieldCustomInputComponent);
    return FormlyFieldCustomInputComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/types/repeat-section.ts":
/*!*****************************************!*\
  !*** ./src/app/types/repeat-section.ts ***!
  \*****************************************/
/*! exports provided: FormlyFieldRepeatSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldRepeatSectionComponent", function() { return FormlyFieldRepeatSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormlyFieldRepeatSectionComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldRepeatSectionComponent, _super);
    function FormlyFieldRepeatSectionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fields = [];
        return _this;
    }
    FormlyFieldRepeatSectionComponent.createControl = function (model, field) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], field.validators ? field.validators.validation : undefined, field.asyncValidators ? field.asyncValidators.validation : undefined);
    };
    Object.defineProperty(FormlyFieldRepeatSectionComponent.prototype, "formArray", {
        get: function () {
            return this.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyFieldRepeatSectionComponent.prototype, "newOptions", {
        get: function () {
            return Object.assign({}, this.options);
        },
        enumerable: true,
        configurable: true
    });
    FormlyFieldRepeatSectionComponent.prototype.fields = function (index) {
        if (this._fields[index]) {
            return this._fields[index];
        }
        this._fields.splice(index, 0, Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.field.fieldArray.fieldGroup));
        return this._fields[index];
    };
    FormlyFieldRepeatSectionComponent.prototype.canAdd = function () {
        var canAdd = this.to['canAdd'];
        return canAdd === undefined || (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(canAdd) ? canAdd.apply(this) : canAdd) === true;
    };
    FormlyFieldRepeatSectionComponent.prototype.canRemove = function (index) {
        var canRemove = this.to['canRemove'];
        if (canRemove === false) {
            return false;
        }
        var value = this.model[index];
        if (value && value.canRemove === false) {
            return false;
        }
        return !Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(canRemove) || canRemove.apply(this, [index]) === true;
    };
    FormlyFieldRepeatSectionComponent.prototype.add = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        var added = {};
        var onSectionAdded = this.to['onSectionAdded'];
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(onSectionAdded)) {
            onSectionAdded.apply(this, [added]);
        }
        this.model.push(added);
        this._fields.push(Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.field.fieldArray.fieldGroup));
        this.formControl.push(formGroup);
    };
    FormlyFieldRepeatSectionComponent.prototype.remove = function (index) {
        this.formControl.removeAt(index);
        var removed = this.model.splice(index, 1);
        var onSectionRemoved = this.to['onSectionRemoved'];
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(onSectionRemoved)) {
            onSectionRemoved.apply(this, [removed, index]);
        }
        this._fields.splice(index, 1);
    };
    FormlyFieldRepeatSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formly-field-repeat-section',
            template: "\n        <div class=\"header\" *ngIf=\"canAdd()\">\n            <button type=\"button\" class=\"add-btn btn btn-sm btn-primary\" (click)=\"add()\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            </button>\n        </div>\n        <div class=\"body\" [ngClass]=\"{interactive: canAdd()}\">\n            <div class=\"section flex-container\" *ngFor=\"let control of formArray.controls; index as i\"\n                [ngClass]=\"{interactive: canRemove(i)}\">\n                <button type=\"button\" class=\"remove-btn btn btn-sm btn-danger\" (click)=\"remove(i)\" *ngIf=\"canRemove(i)\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                </button>\n                <formly-form [model]=\"model[i]\" [fields]=\"fields(i)\" [options]=\"newOptions\"\n                    [form]=\"formArray.at(i)\" [ngClass]=\"field.fieldArray.className\">\n                </formly-form>\n            </div>\n        </div>\n    ",
            styles: ["\n        .header {\n            margin-top: .5em;\n        }\n        .flex-container.interactive {\n            display: flex;\n            align-items: flex-start;\n            flex-wrap: nowrap;\n        }\n        formly-form {\n            flex-grow: 1;\n        }\n        .body.interactive {\n            margin-top: 0.5em;\n        }\n        .section {\n            margin-bottom: .25em;\n        }\n        .section>button {\n            margin-top: .25em;\n        }\n    "]
        })
    ], FormlyFieldRepeatSectionComponent);
    return FormlyFieldRepeatSectionComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./src/app/wrappers/expander.ts":
/*!**************************************!*\
  !*** ./src/app/wrappers/expander.ts ***!
  \**************************************/
/*! exports provided: FormlyWrapperExpanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyWrapperExpanderComponent", function() { return FormlyWrapperExpanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormlyWrapperExpanderComponent = /** @class */ (function (_super) {
    __extends(FormlyWrapperExpanderComponent, _super);
    function FormlyWrapperExpanderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormlyWrapperExpanderComponent.prototype, "expanded", {
        get: function () {
            return !this.to || this.to['expanded'] === undefined || this.to['expanded'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormlyWrapperExpanderComponent.prototype, "label", {
        get: function () {
            return this.to ? this.to.label : undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FormlyWrapperExpanderComponent.prototype, "fieldComponent", void 0);
    FormlyWrapperExpanderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formly-wrapper-expander',
            template: "\n        <expander [heading]=\"label\" [expanded]=\"expanded\">\n            <ng-template #fieldComponent></ng-template>\n        </expander>\n    "
        })
    ], FormlyWrapperExpanderComponent);
    return FormlyWrapperExpanderComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldWrapper"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\github\ngx-formly-designer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map