sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /** 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("zsjh01.controller.View1", {
            onInit: function () {
                let oData = {
                    recipient : {
                        name : "World"
                    }
                };
                // oData라는 객체를 JSONModel로 만들어 주세요.
                let oModel = new JSONModel(oData);

                // view에 모델 설정, this.getView() -> 내 컨트롤러랑 연결된 view를 가져와 주세요.
                // this.getView() -> View1.view.xml
                this.getView().setModel(oModel);

                // 데이터 모델링을 하는 2가지 방법
                // 1. this.getView().setModel(JSONModel)
                // 2. this.getView().setModel(JSONModel, "modelName")

                // 1번의 경우 this.getView().getModel()
                // 2번의 경우 this.getView().getModel("modelName")

                let i18nModel = new ResourceModel({
                    bundleName : "zsjh_01.i18n.i18n"
                });

                this.getView().setModel(i18nModel, "i17n");

            },
            onShowHello: function(){
                let oBundle = this.getView().getModel("i17n").getResourceBundle();
                let sRecipient = this.getView().getModel().getProperty("/recipient/name") // value -> world
                let sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // let msg = "Hello"
                MessageToast.show(sMsg, {
                    width : '50em'
                });
            }
        });
    });
