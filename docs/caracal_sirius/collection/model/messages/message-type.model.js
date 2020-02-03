export var MessageType;
(function (MessageType) {
    MessageType["StartLoading"] = "START_LOADING";
    MessageType["EndLoading"] = "END_LOADING";
    MessageType["Error"] = "ERROR";
    MessageType["ValidationError"] = "VALIDATION_ERROR";
    MessageType["Workflow_Changing"] = "WORKFLOW_CHANGING";
    MessageType["Workflow_Changed"] = "WORKFLOW_CHANGED";
})(MessageType || (MessageType = {}));
