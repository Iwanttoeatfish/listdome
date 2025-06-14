if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ListIndex_Params {
    data?: string[];
}
class ListIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__data = new ObservedPropertyObjectPU([], this, "data");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListIndex_Params) {
        if (params.data !== undefined) {
            this.data = params.data;
        }
    }
    updateStateVars(params: ListIndex_Params) {
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
    aboutToAppear(): void {
        for (let i = 0; i < 20; i++) {
            this.data.push('逃单小孩' + i.toString());
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 10 });
            List.listDirection(Axis.Vertical);
            List.alignListItem(ListItemAlign.Start);
            List.height('100%');
            List.width('100%');
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //子組件
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
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
                        ListItem.onClick(() => {
                            console.log("点击第几个" + index);
                        });
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.backgroundColor(Color.Yellow);
                            Row.width("80%");
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.example.listdemo", "moduleName": "entry" });
                            Image.width(40);
                            Image.height(40);
                            Image.margin(10);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                        }, Text);
                        Text.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.data, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        //子組件
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ListIndex";
    }
}
registerNamedRoute(() => new ListIndex(undefined, {}), "", { bundleName: "com.example.listdemo", moduleName: "entry", pagePath: "pages/ListIndex", pageFullPath: "entry/src/main/ets/pages/ListIndex", integratedHsp: "false", moduleType: "followWithHap" });
