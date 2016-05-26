define({
  "ReactVersion": [],
  "addons/ReactComponentWithPureRenderMixin": [
    "shallowCompare"
  ],
  "addons/ReactFragment": [
    "ReactChildren",
    "ReactElement",
    "emptyFunction",
    "invariant",
    "warning"
  ],
  "addons/ReactWithAddons": [
    "LinkedStateMixin",
    "React",
    "ReactCSSTransitionGroup",
    "ReactComponentWithPureRenderMixin",
    "ReactFragment",
    "ReactPerf",
    "ReactTestUtils",
    "ReactTransitionGroup",
    "shallowCompare",
    "update"
  ],
  "addons/link/LinkedStateMixin": [
    "ReactLink",
    "ReactStateSetters"
  ],
  "addons/link/ReactLink": [
    "React"
  ],
  "addons/renderSubtreeIntoContainer": [
    "ReactMount"
  ],
  "addons/shallowCompare": [
    "shallowEqual"
  ],
  "addons/transitions/ReactCSSTransitionGroup": [
    "React",
    "ReactCSSTransitionGroupChild",
    "ReactTransitionGroup"
  ],
  "addons/transitions/ReactCSSTransitionGroupChild": [
    "CSSCore",
    "React",
    "ReactDOM",
    "ReactTransitionEvents",
    "onlyChild"
  ],
  "addons/transitions/ReactTransitionChildMapping": [
    "flattenChildren"
  ],
  "addons/transitions/ReactTransitionEvents": [
    "ExecutionEnvironment",
    "getVendorPrefixedEventName"
  ],
  "addons/transitions/ReactTransitionGroup": [
    "React",
    "ReactInstanceMap",
    "ReactTransitionChildMapping",
    "emptyFunction"
  ],
  "addons/update": [
    "invariant",
    "keyOf"
  ],
  "isomorphic/React": [
    "ReactChildren",
    "ReactClass",
    "ReactComponent",
    "ReactDOMFactories",
    "ReactElement",
    "ReactElementValidator",
    "ReactPropTypes",
    "ReactVersion",
    "onlyChild",
    "warning"
  ],
  "isomorphic/children/ReactChildren": [
    "PooledClass",
    "ReactElement",
    "emptyFunction",
    "traverseAllChildren"
  ],
  "isomorphic/children/onlyChild": [
    "ReactElement",
    "invariant"
  ],
  "isomorphic/children/sliceChildren": [
    "ReactChildren"
  ],
  "isomorphic/classic/class/ReactClass": [
    "ReactComponent",
    "ReactElement",
    "ReactNoopUpdateQueue",
    "ReactPropTypeLocationNames",
    "ReactPropTypeLocations",
    "emptyObject",
    "invariant",
    "keyMirror",
    "keyOf",
    "warning"
  ],
  "isomorphic/classic/element/ReactCurrentOwner": [],
  "isomorphic/classic/element/ReactDOMFactories": [
    "ReactElement",
    "ReactElementValidator",
    "mapObject"
  ],
  "isomorphic/classic/element/ReactElement": [
    "ReactCurrentOwner",
    "canDefineProperty",
    "warning"
  ],
  "isomorphic/classic/element/ReactElementValidator": [
    "ReactComponentTreeDevtool",
    "ReactCurrentOwner",
    "ReactElement",
    "ReactPropTypeLocations",
    "canDefineProperty",
    "checkReactTypeSpec",
    "getIteratorFn",
    "warning"
  ],
  "isomorphic/classic/types/ReactPropTypeLocationNames": [],
  "isomorphic/classic/types/ReactPropTypeLocations": [
    "keyMirror"
  ],
  "isomorphic/classic/types/ReactPropTypes": [
    "ReactElement",
    "ReactPropTypeLocationNames",
    "emptyFunction",
    "getIteratorFn"
  ],
  "isomorphic/classic/types/checkReactTypeSpec": [
    "ReactComponentTreeDevtool",
    "ReactPropTypeLocationNames",
    "invariant",
    "warning"
  ],
  "isomorphic/modern/class/ReactComponent": [
    "ReactNoopUpdateQueue",
    "canDefineProperty",
    "emptyObject",
    "invariant",
    "warning"
  ],
  "isomorphic/modern/class/ReactNoopUpdateQueue": [
    "warning"
  ],
  "renderers/art/ReactART": [],
  "renderers/dom/ReactDOM": [
    "ExecutionEnvironment",
    "ReactDOMComponentTree",
    "ReactDefaultInjection",
    "ReactMount",
    "ReactReconciler",
    "ReactUpdates",
    "ReactVersion",
    "findDOMNode",
    "getHostComponentFromComposite",
    "renderSubtreeIntoContainer",
    "warning"
  ],
  "renderers/dom/ReactDOMServer": [
    "ReactDefaultInjection",
    "ReactServerRendering",
    "ReactVersion"
  ],
  "renderers/dom/client/ReactBrowserEventEmitter": [
    "EventConstants",
    "EventPluginRegistry",
    "ReactEventEmitterMixin",
    "ViewportMetrics",
    "getVendorPrefixedEventName",
    "isEventSupported"
  ],
  "renderers/dom/client/ReactDOMComponentTree": [
    "DOMProperty",
    "ReactDOMComponentFlags",
    "invariant"
  ],
  "renderers/dom/client/ReactDOMIDOperations": [
    "DOMChildrenOperations",
    "ReactDOMComponentTree"
  ],
  "renderers/dom/client/ReactDOMSelection": [
    "ExecutionEnvironment",
    "getNodeForCharacterOffset",
    "getTextContentAccessor"
  ],
  "renderers/dom/client/ReactDOMTreeTraversal": [
    "invariant"
  ],
  "renderers/dom/client/ReactEventListener": [
    "EventListener",
    "ExecutionEnvironment",
    "PooledClass",
    "ReactDOMComponentTree",
    "ReactUpdates",
    "getEventTarget",
    "getUnboundedScrollPosition"
  ],
  "renderers/dom/client/ReactInputSelection": [
    "ReactDOMSelection",
    "containsNode",
    "focusNode",
    "getActiveElement"
  ],
  "renderers/dom/client/ReactMount": [
    "DOMLazyTree",
    "DOMProperty",
    "ReactBrowserEventEmitter",
    "ReactCurrentOwner",
    "ReactDOMComponentTree",
    "ReactDOMContainerInfo",
    "ReactDOMFeatureFlags",
    "ReactElement",
    "ReactFeatureFlags",
    "ReactInstrumentation",
    "ReactMarkupChecksum",
    "ReactReconciler",
    "ReactUpdateQueue",
    "ReactUpdates",
    "emptyObject",
    "instantiateReactComponent",
    "invariant",
    "setInnerHTML",
    "shouldUpdateReactComponent",
    "warning"
  ],
  "renderers/dom/client/ReactReconcileTransaction": [
    "CallbackQueue",
    "PooledClass",
    "ReactBrowserEventEmitter",
    "ReactInputSelection",
    "Transaction"
  ],
  "renderers/dom/client/eventPlugins/BeforeInputEventPlugin": [
    "EventConstants",
    "EventPropagators",
    "ExecutionEnvironment",
    "FallbackCompositionState",
    "SyntheticCompositionEvent",
    "SyntheticInputEvent",
    "keyOf"
  ],
  "renderers/dom/client/eventPlugins/ChangeEventPlugin": [
    "EventConstants",
    "EventPluginHub",
    "EventPropagators",
    "ExecutionEnvironment",
    "ReactDOMComponentTree",
    "ReactUpdates",
    "SyntheticEvent",
    "getEventTarget",
    "inputValueTracking",
    "isEventSupported",
    "isTextInputElement",
    "keyOf"
  ],
  "renderers/dom/client/eventPlugins/DefaultEventPluginOrder": [
    "keyOf"
  ],
  "renderers/dom/client/eventPlugins/EnterLeaveEventPlugin": [
    "EventConstants",
    "EventPropagators",
    "ReactDOMComponentTree",
    "SyntheticMouseEvent",
    "keyOf"
  ],
  "renderers/dom/client/eventPlugins/FallbackCompositionState": [
    "PooledClass",
    "getTextContentAccessor"
  ],
  "renderers/dom/client/eventPlugins/SelectEventPlugin": [
    "EventConstants",
    "EventPropagators",
    "ExecutionEnvironment",
    "ReactDOMComponentTree",
    "ReactInputSelection",
    "SyntheticEvent",
    "getActiveElement",
    "isTextInputElement",
    "keyOf",
    "shallowEqual"
  ],
  "renderers/dom/client/eventPlugins/SimpleEventPlugin": [
    "EventConstants",
    "EventListener",
    "EventPropagators",
    "ReactDOMComponentTree",
    "SyntheticAnimationEvent",
    "SyntheticClipboardEvent",
    "SyntheticDragEvent",
    "SyntheticEvent",
    "SyntheticFocusEvent",
    "SyntheticKeyboardEvent",
    "SyntheticMouseEvent",
    "SyntheticTouchEvent",
    "SyntheticTransitionEvent",
    "SyntheticUIEvent",
    "SyntheticWheelEvent",
    "emptyFunction",
    "getEventCharCode",
    "invariant",
    "keyOf"
  ],
  "renderers/dom/client/eventPlugins/TapEventPlugin": [
    "EventConstants",
    "EventPluginUtils",
    "EventPropagators",
    "SyntheticUIEvent",
    "TouchEventUtils",
    "ViewportMetrics",
    "keyOf"
  ],
  "renderers/dom/client/findDOMNode": [
    "ReactCurrentOwner",
    "ReactDOMComponentTree",
    "ReactInstanceMap",
    "getHostComponentFromComposite",
    "invariant",
    "warning"
  ],
  "renderers/dom/client/inputValueTracking": [
    "ReactDOMComponentTree"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticAnimationEvent": [
    "SyntheticEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticClipboardEvent": [
    "SyntheticEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticCompositionEvent": [
    "SyntheticEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticDragEvent": [
    "SyntheticMouseEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticEvent": [
    "PooledClass",
    "emptyFunction",
    "warning"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticFocusEvent": [
    "SyntheticUIEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticInputEvent": [
    "SyntheticEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticKeyboardEvent": [
    "SyntheticUIEvent",
    "getEventCharCode",
    "getEventKey",
    "getEventModifierState"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticMouseEvent": [
    "SyntheticUIEvent",
    "ViewportMetrics",
    "getEventModifierState"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticTouchEvent": [
    "SyntheticUIEvent",
    "getEventModifierState"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticTransitionEvent": [
    "SyntheticEvent"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticUIEvent": [
    "SyntheticEvent",
    "getEventTarget"
  ],
  "renderers/dom/client/syntheticEvents/SyntheticWheelEvent": [
    "SyntheticMouseEvent"
  ],
  "renderers/dom/client/utils/DOMChildrenOperations": [
    "DOMLazyTree",
    "Danger",
    "ReactDOMComponentTree",
    "ReactInstrumentation",
    "ReactMultiChildUpdateTypes",
    "createMicrosoftUnsafeLocalFunction",
    "setInnerHTML",
    "setTextContent"
  ],
  "renderers/dom/client/utils/DOMLazyTree": [
    "DOMNamespaces",
    "createMicrosoftUnsafeLocalFunction",
    "setTextContent"
  ],
  "renderers/dom/client/utils/ViewportMetrics": [],
  "renderers/dom/client/utils/createMicrosoftUnsafeLocalFunction": [],
  "renderers/dom/client/utils/getEventCharCode": [],
  "renderers/dom/client/utils/getEventKey": [
    "getEventCharCode"
  ],
  "renderers/dom/client/utils/getEventModifierState": [],
  "renderers/dom/client/utils/getEventTarget": [],
  "renderers/dom/client/utils/getNodeForCharacterOffset": [],
  "renderers/dom/client/utils/getTextContentAccessor": [
    "ExecutionEnvironment"
  ],
  "renderers/dom/client/utils/getVendorPrefixedEventName": [
    "ExecutionEnvironment"
  ],
  "renderers/dom/client/utils/isEventSupported": [
    "ExecutionEnvironment"
  ],
  "renderers/dom/client/utils/setInnerHTML": [
    "ExecutionEnvironment",
    "createMicrosoftUnsafeLocalFunction"
  ],
  "renderers/dom/client/utils/setTextContent": [
    "ExecutionEnvironment",
    "escapeTextContentForBrowser",
    "setInnerHTML"
  ],
  "renderers/dom/client/validateDOMNesting": [
    "emptyFunction",
    "warning"
  ],
  "renderers/dom/client/wrappers/AutoFocusUtils": [
    "ReactDOMComponentTree",
    "focusNode"
  ],
  "renderers/dom/client/wrappers/DisabledInputUtils": [],
  "renderers/dom/client/wrappers/LinkedValueUtils": [
    "ReactPropTypeLocations",
    "ReactPropTypes",
    "invariant",
    "warning"
  ],
  "renderers/dom/client/wrappers/ReactDOMButton": [
    "DisabledInputUtils"
  ],
  "renderers/dom/client/wrappers/ReactDOMInput": [
    "DOMPropertyOperations",
    "DisabledInputUtils",
    "LinkedValueUtils",
    "ReactDOMComponentTree",
    "ReactUpdates",
    "invariant",
    "warning"
  ],
  "renderers/dom/client/wrappers/ReactDOMOption": [
    "ReactChildren",
    "ReactDOMComponentTree",
    "ReactDOMSelect",
    "warning"
  ],
  "renderers/dom/client/wrappers/ReactDOMSelect": [
    "DisabledInputUtils",
    "LinkedValueUtils",
    "ReactDOMComponentTree",
    "ReactUpdates",
    "warning"
  ],
  "renderers/dom/client/wrappers/ReactDOMTextarea": [
    "DisabledInputUtils",
    "LinkedValueUtils",
    "ReactDOMComponentTree",
    "ReactUpdates",
    "invariant",
    "warning"
  ],
  "renderers/dom/server/ReactMarkupChecksum": [
    "adler32"
  ],
  "renderers/dom/server/ReactServerBatchingStrategy": [],
  "renderers/dom/server/ReactServerRendering": [
    "ReactDOMContainerInfo",
    "ReactDefaultBatchingStrategy",
    "ReactElement",
    "ReactInstrumentation",
    "ReactMarkupChecksum",
    "ReactReconciler",
    "ReactServerBatchingStrategy",
    "ReactServerRenderingTransaction",
    "ReactUpdates",
    "emptyObject",
    "instantiateReactComponent",
    "invariant"
  ],
  "renderers/dom/server/ReactServerRenderingTransaction": [
    "PooledClass",
    "Transaction"
  ],
  "renderers/dom/shared/CSSProperty": [],
  "renderers/dom/shared/CSSPropertyOperations": [
    "CSSProperty",
    "ExecutionEnvironment",
    "ReactInstrumentation",
    "camelizeStyleName",
    "dangerousStyleValue",
    "hyphenateStyleName",
    "memoizeStringOnly",
    "warning"
  ],
  "renderers/dom/shared/DOMNamespaces": [],
  "renderers/dom/shared/DOMProperty": [
    "invariant"
  ],
  "renderers/dom/shared/DOMPropertyOperations": [
    "DOMProperty",
    "ReactDOMComponentTree",
    "ReactDOMInstrumentation",
    "ReactInstrumentation",
    "quoteAttributeValueForBrowser",
    "warning"
  ],
  "renderers/dom/shared/Danger": [
    "DOMLazyTree",
    "ExecutionEnvironment",
    "createNodesFromMarkup",
    "emptyFunction",
    "getMarkupWrap",
    "invariant"
  ],
  "renderers/dom/shared/HTMLDOMPropertyConfig": [
    "DOMProperty"
  ],
  "renderers/dom/shared/ReactComponentBrowserEnvironment": [
    "DOMChildrenOperations",
    "ReactDOMIDOperations"
  ],
  "renderers/dom/shared/ReactDOMComponent": [
    "AutoFocusUtils",
    "CSSPropertyOperations",
    "DOMLazyTree",
    "DOMNamespaces",
    "DOMProperty",
    "DOMPropertyOperations",
    "EventConstants",
    "EventPluginHub",
    "EventPluginRegistry",
    "ReactBrowserEventEmitter",
    "ReactComponentBrowserEnvironment",
    "ReactDOMButton",
    "ReactDOMComponentFlags",
    "ReactDOMComponentTree",
    "ReactDOMInput",
    "ReactDOMOption",
    "ReactDOMSelect",
    "ReactDOMTextarea",
    "ReactInstrumentation",
    "ReactMultiChild",
    "ReactServerRenderingTransaction",
    "emptyFunction",
    "escapeTextContentForBrowser",
    "inputValueTracking",
    "invariant",
    "isEventSupported",
    "keyOf",
    "shallowEqual",
    "validateDOMNesting",
    "warning"
  ],
  "renderers/dom/shared/ReactDOMComponentFlags": [],
  "renderers/dom/shared/ReactDOMContainerInfo": [
    "validateDOMNesting"
  ],
  "renderers/dom/shared/ReactDOMDebugTool": [
    "ReactDOMUnknownPropertyDevtool",
    "ReactDebugTool",
    "warning"
  ],
  "renderers/dom/shared/ReactDOMEmptyComponent": [
    "DOMLazyTree",
    "ReactDOMComponentTree"
  ],
  "renderers/dom/shared/ReactDOMFeatureFlags": [],
  "renderers/dom/shared/ReactDOMInstrumentation": [
    "ReactDOMDebugTool"
  ],
  "renderers/dom/shared/ReactDOMTextComponent": [
    "DOMChildrenOperations",
    "DOMLazyTree",
    "ReactDOMComponentTree",
    "ReactInstrumentation",
    "escapeTextContentForBrowser",
    "invariant",
    "validateDOMNesting"
  ],
  "renderers/dom/shared/ReactDefaultInjection": [
    "BeforeInputEventPlugin",
    "ChangeEventPlugin",
    "DefaultEventPluginOrder",
    "EnterLeaveEventPlugin",
    "HTMLDOMPropertyConfig",
    "ReactComponentBrowserEnvironment",
    "ReactDOMComponent",
    "ReactDOMComponentTree",
    "ReactDOMEmptyComponent",
    "ReactDOMTextComponent",
    "ReactDOMTreeTraversal",
    "ReactDefaultBatchingStrategy",
    "ReactEventListener",
    "ReactInjection",
    "ReactReconcileTransaction",
    "SVGDOMPropertyConfig",
    "SelectEventPlugin",
    "SimpleEventPlugin"
  ],
  "renderers/dom/shared/ReactInjection": [
    "DOMProperty",
    "EventPluginHub",
    "EventPluginUtils",
    "ReactBrowserEventEmitter",
    "ReactClass",
    "ReactComponentEnvironment",
    "ReactEmptyComponent",
    "ReactHostComponent",
    "ReactUpdates"
  ],
  "renderers/dom/shared/SVGDOMPropertyConfig": [],
  "renderers/dom/shared/dangerousStyleValue": [
    "CSSProperty",
    "warning"
  ],
  "renderers/dom/shared/devtools/ReactDOMUnknownPropertyDevtool": [
    "DOMProperty",
    "EventPluginRegistry",
    "warning"
  ],
  "renderers/dom/shared/escapeTextContentForBrowser": [],
  "renderers/dom/shared/quoteAttributeValueForBrowser": [
    "escapeTextContentForBrowser"
  ],
  "renderers/native/NativeMethodsMixin": [],
  "renderers/native/ReactNative": [],
  "renderers/native/ReactNativeAttributePayload": [],
  "renderers/native/ReactNativeBaseComponent": [],
  "renderers/native/ReactNativeBridgeEventPlugin": [],
  "renderers/native/ReactNativeComponentEnvironment": [
    "ReactNativeDOMIDOperations",
    "ReactNativeReconcileTransaction"
  ],
  "renderers/native/ReactNativeComponentTree": [
    "invariant"
  ],
  "renderers/native/ReactNativeContainerInfo": [],
  "renderers/native/ReactNativeDOMIDOperations": [
    "ReactMultiChildUpdateTypes",
    "ReactNativeComponentTree",
    "UIManager"
  ],
  "renderers/native/ReactNativeDefaultInjection": [
    "EventPluginHub",
    "EventPluginUtils",
    "InitializeJavaScriptAppEngine",
    "RCTEventEmitter",
    "ReactComponentEnvironment",
    "ReactDefaultBatchingStrategy",
    "ReactElement",
    "ReactEmptyComponent",
    "ReactHostComponent",
    "ReactNativeBridgeEventPlugin",
    "ReactNativeComponentEnvironment",
    "ReactNativeComponentTree",
    "ReactNativeEventEmitter",
    "ReactNativeEventPluginOrder",
    "ReactNativeGlobalResponderHandler",
    "ReactNativeTextComponent",
    "ReactNativeTreeTraversal",
    "ReactSimpleEmptyComponent",
    "ReactUpdates",
    "ResponderEventPlugin",
    "View",
    "invariant"
  ],
  "renderers/native/ReactNativeEventEmitter": [],
  "renderers/native/ReactNativeEventPluginOrder": [],
  "renderers/native/ReactNativeGlobalResponderHandler": [
    "UIManager"
  ],
  "renderers/native/ReactNativeMount": [],
  "renderers/native/ReactNativePropRegistry": [],
  "renderers/native/ReactNativeReconcileTransaction": [
    "CallbackQueue",
    "PooledClass",
    "Transaction"
  ],
  "renderers/native/ReactNativeTagHandles": [],
  "renderers/native/ReactNativeTextComponent": [
    "ReactInstrumentation",
    "ReactNativeComponentTree",
    "ReactNativeTagHandles",
    "UIManager",
    "invariant"
  ],
  "renderers/native/ReactNativeTreeTraversal": [],
  "renderers/native/createReactNativeComponentClass": [],
  "renderers/native/findNodeHandle": [],
  "renderers/noop/ReactNoop": [],
  "renderers/shared/ReactDebugTool": [
    "ExecutionEnvironment",
    "ReactComponentTreeDevtool",
    "ReactHostOperationHistoryDevtool",
    "ReactInvalidSetStateWarningDevTool",
    "performanceNow",
    "warning"
  ],
  "renderers/shared/ReactInstrumentation": [
    "ReactDebugTool"
  ],
  "renderers/shared/ReactPerf": [],
  "renderers/shared/devtools/ReactComponentTreeDevtool": [
    "ReactCurrentOwner",
    "invariant"
  ],
  "renderers/shared/devtools/ReactHostOperationHistoryDevtool": [],
  "renderers/shared/devtools/ReactInvalidSetStateWarningDevTool": [
    "warning"
  ],
  "renderers/shared/fiber/ReactFiber": [],
  "renderers/shared/fiber/ReactFiberFunctionalComponent": [],
  "renderers/shared/fiber/ReactFiberReconciler": [],
  "renderers/shared/fiber/ReactStateNode": [],
  "renderers/shared/fiber/ReactTypesOfWork": [],
  "renderers/shared/shared/shouldUpdateReactComponent": [],
  "renderers/shared/stack/event/EventConstants": [
    "keyMirror"
  ],
  "renderers/shared/stack/event/EventPluginHub": [
    "EventPluginRegistry",
    "EventPluginUtils",
    "ReactErrorUtils",
    "accumulateInto",
    "forEachAccumulated",
    "invariant"
  ],
  "renderers/shared/stack/event/EventPluginRegistry": [
    "invariant"
  ],
  "renderers/shared/stack/event/EventPluginUtils": [
    "EventConstants",
    "ReactErrorUtils",
    "invariant",
    "warning"
  ],
  "renderers/shared/stack/event/EventPropagators": [
    "EventConstants",
    "EventPluginHub",
    "EventPluginUtils",
    "accumulateInto",
    "forEachAccumulated",
    "warning"
  ],
  "renderers/shared/stack/event/eventPlugins/ResponderEventPlugin": [
    "EventConstants",
    "EventPluginUtils",
    "EventPropagators",
    "ResponderSyntheticEvent",
    "ResponderTouchHistoryStore",
    "accumulate",
    "invariant",
    "keyOf"
  ],
  "renderers/shared/stack/event/eventPlugins/ResponderSyntheticEvent": [
    "SyntheticEvent"
  ],
  "renderers/shared/stack/event/eventPlugins/ResponderTouchHistoryStore": [
    "EventPluginUtils",
    "invariant"
  ],
  "renderers/shared/stack/event/eventPlugins/TouchHistoryMath": [],
  "renderers/shared/stack/reconciler/ReactChildReconciler": [
    "KeyEscapeUtils",
    "ReactComponentTreeDevtool",
    "ReactReconciler",
    "instantiateReactComponent",
    "shouldUpdateReactComponent",
    "traverseAllChildren",
    "warning"
  ],
  "renderers/shared/stack/reconciler/ReactComponentEnvironment": [
    "invariant"
  ],
  "renderers/shared/stack/reconciler/ReactCompositeComponent": [
    "ReactComponentEnvironment",
    "ReactCurrentOwner",
    "ReactElement",
    "ReactErrorUtils",
    "ReactInstanceMap",
    "ReactInstrumentation",
    "ReactNodeTypes",
    "ReactPropTypeLocations",
    "ReactReconciler",
    "ReactUpdateQueue",
    "checkReactTypeSpec",
    "emptyObject",
    "invariant",
    "shouldUpdateReactComponent",
    "warning"
  ],
  "renderers/shared/stack/reconciler/ReactDefaultBatchingStrategy": [
    "ReactUpdates",
    "Transaction",
    "emptyFunction"
  ],
  "renderers/shared/stack/reconciler/ReactEmptyComponent": [],
  "renderers/shared/stack/reconciler/ReactEventEmitterMixin": [
    "EventPluginHub"
  ],
  "renderers/shared/stack/reconciler/ReactHostComponent": [
    "invariant"
  ],
  "renderers/shared/stack/reconciler/ReactInstanceHandles": [
    "invariant"
  ],
  "renderers/shared/stack/reconciler/ReactInstanceMap": [],
  "renderers/shared/stack/reconciler/ReactMultiChild": [],
  "renderers/shared/stack/reconciler/ReactMultiChildUpdateTypes": [
    "keyMirror"
  ],
  "renderers/shared/stack/reconciler/ReactOwner": [
    "invariant"
  ],
  "renderers/shared/stack/reconciler/ReactReconciler": [
    "ReactInstrumentation",
    "ReactRef",
    "invariant"
  ],
  "renderers/shared/stack/reconciler/ReactRef": [
    "ReactOwner"
  ],
  "renderers/shared/stack/reconciler/ReactSimpleEmptyComponent": [
    "ReactReconciler"
  ],
  "renderers/shared/stack/reconciler/ReactStateSetters": [],
  "renderers/shared/stack/reconciler/ReactUpdateQueue": [
    "ReactCurrentOwner",
    "ReactInstanceMap",
    "ReactInstrumentation",
    "ReactUpdates",
    "invariant",
    "warning"
  ],
  "renderers/shared/stack/reconciler/ReactUpdates": [
    "CallbackQueue",
    "PooledClass",
    "ReactFeatureFlags",
    "ReactInstrumentation",
    "ReactReconciler",
    "Transaction",
    "invariant"
  ],
  "renderers/shared/stack/reconciler/instantiateReactComponent": [
    "ReactCompositeComponent",
    "ReactEmptyComponent",
    "ReactHostComponent",
    "ReactInstrumentation",
    "invariant",
    "warning"
  ],
  "shared/utils/CallbackQueue": [
    "PooledClass",
    "invariant"
  ],
  "shared/utils/KeyEscapeUtils": [],
  "shared/utils/PooledClass": [
    "invariant"
  ],
  "shared/utils/ReactErrorUtils": [],
  "shared/utils/ReactFeatureFlags": [],
  "shared/utils/ReactNodeTypes": [
    "ReactElement",
    "invariant"
  ],
  "shared/utils/Transaction": [
    "invariant"
  ],
  "shared/utils/accumulate": [
    "invariant"
  ],
  "shared/utils/accumulateInto": [
    "invariant"
  ],
  "shared/utils/adler32": [],
  "shared/utils/canDefineProperty": [],
  "shared/utils/deprecated": [
    "warning"
  ],
  "shared/utils/flattenChildren": [
    "KeyEscapeUtils",
    "ReactComponentTreeDevtool",
    "traverseAllChildren",
    "warning"
  ],
  "shared/utils/forEachAccumulated": [],
  "shared/utils/getHostComponentFromComposite": [
    "ReactNodeTypes"
  ],
  "shared/utils/getIteratorFn": [],
  "shared/utils/isTextInputElement": [],
  "shared/utils/traverseAllChildren": [
    "KeyEscapeUtils",
    "ReactCurrentOwner",
    "ReactElement",
    "getIteratorFn",
    "invariant",
    "warning"
  ],
  "shared/vendor/third_party/webcomponents": [],
  "test/MetaMatchers": [],
  "test/ReactComponentTreeTestUtils": [],
  "test/ReactTestUtils": [
    "EventConstants",
    "EventPluginHub",
    "EventPluginRegistry",
    "EventPropagators",
    "React",
    "ReactBrowserEventEmitter",
    "ReactCompositeComponent",
    "ReactDOM",
    "ReactDOMComponentTree",
    "ReactDefaultInjection",
    "ReactElement",
    "ReactInstanceMap",
    "ReactUpdates",
    "SyntheticEvent",
    "emptyObject",
    "findDOMNode",
    "invariant"
  ],
  "test/createHierarchyRenderer": [
    "React"
  ],
  "test/getTestDocument": [],
  "test/reactComponentExpect": [
    "ReactInstanceMap",
    "ReactTestUtils",
    "invariant"
  ],
  "umd/ReactUMDEntry": [
    "React",
    "ReactDOM",
    "ReactDOMServer"
  ],
  "umd/ReactWithAddonsUMDEntry": [
    "ReactDOM",
    "ReactDOMServer",
    "ReactWithAddons"
  ]
})