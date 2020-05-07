"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CrudController_1 = require("../CrudController");
var EventCommandService_1 = __importDefault(require("../../commandService/EventCommandService"));
var EventController = /** @class */ (function (_super) {
    __extends(EventController, _super);
    function EventController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventController.prototype.create = function (req, res) {
        var data = req.body;
        EventCommandService_1.default(data);
        res.json({ message: 'Post /event request received', data: data });
    };
    EventController.prototype.read = function (req, res) {
        res.json({ message: 'GET /event request received' });
    };
    EventController.prototype.update = function (req, res) {
        throw new Error("Method not implemented.");
    };
    EventController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return EventController;
}(CrudController_1.CrudController));
exports.EventController = EventController;
