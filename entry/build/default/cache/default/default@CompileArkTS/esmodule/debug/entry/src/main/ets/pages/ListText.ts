if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ListText_Params {
    data?: string[];
}
class ListText extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__data = new ObservedPropertyObjectPU([], this, "data");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListText_Params) {
        if (params.data !== undefined) {
            this.data = params.data;
        }
    }
    updateStateVars(params: ListText_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__data.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__data.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __data: ObservedPropertyObjectPU<string[]>;
    get data() {
        return this.__data.get();
    }
    set data(newValue: string[]) {
        this.__data.set(newValue);
    }
    itemHead(str: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(str);
            Text.fontSize(20);
            Text.backgroundColor(Color.Gray);
            Text.width('100%');
            Text.padding(5);
        }, Text);
        Text.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.alignListItem(ListItemAlign.Center);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ListItemGroup.create({ header: this.itemHead.bind(this, "A组") });
        }, ListItemGroup);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.example.listdemo", "moduleName": "entry" });
                    Image.width(40);
                    Image.height(40);
                    Image.margin({ top: 10 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("鸿蒙设置");
                    Text.fontSize(20);
                }, Text);
                Text.pop();
                Row.pop();
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        ListItemGroup.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ListItemGroup.create({ header: this.itemHead.bind(this, "B组") });
        }, ListItemGroup);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.alignItems(VerticalAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("鸿蒙设置");
                    Text.fontSize(20);
                }, Text);
                Text.pop();
                Row.pop();
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        ListItemGroup.pop();
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.example.listdemo", "moduleName": "entry" });
                    Image.width(40);
                    Image.height(40);
                    Image.margin({ top: 10 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create("鸿蒙设置");
                    Text.fontSize(50);
                }, Text);
                Text.pop();
                Row.pop();
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ListText";
    }
}
registerNamedRoute(() => new ListText(undefined, {}), "", { bundleName: "com.example.listdemo", moduleName: "entry", pagePath: "pages/ListText", pageFullPath: "entry/src/main/ets/pages/ListText", integratedHsp: "false", moduleType: "followWithHap" });
