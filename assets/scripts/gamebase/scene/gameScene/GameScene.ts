import UIFunction from '../../../framework/common/UIFunciton';
import BaseScene from '../../../framework/uibase/BaseScene';

export default class GameScene extends BaseScene {

    constructor(){
        super();
        this._prefab_name = "ui_prefabs/GameSceneUI"
        this._script_name = "GameSceneCtrl"
        this._scene_name  = "GameScene"
    }

    enter(){
        this._scene_ui = UIFunction.getInstance().add_prefab_to_scene_async(this._prefab_name,this._script_name);
    }

    destroy(is_release_res:boolean){
        if(this._scene_ui){
            this._scene_ui.destroy()
        }

        if(is_release_res){

        }
    }
}