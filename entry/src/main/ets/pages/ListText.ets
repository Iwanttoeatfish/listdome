@Entry
@Component
struct ListText {
  @State data:string[] = [];
  @Builder
  itemHead(str:string){
    Text(str)
      .fontSize(20)
      .backgroundColor(Color.Gray)
      .width('100%')
      .padding(5)

  }

  build() {
    List(){
      ListItemGroup({header:this.itemHead("A组")}){
        ListItem(){
          Row(){
            Image($r('app.media.app_icon')).width(40).height(40).margin({top:10})
            Text("鸿蒙设置").fontSize(20)
          }
        }
      }

      ListItemGroup({header:this.itemHead("B组")}){
        ListItem(){
          Row(){
            Text("鸿蒙设置").fontSize(20)
          }.alignItems(VerticalAlign.Center)
        }
      }


        ListItem(){
          Row(){
            Image($r('app.media.app_icon')).width(40).height(40).margin({top:10})
            Text("鸿蒙设置").fontSize(50)
          }
        }


    }.alignListItem(ListItemAlign.Center)
  }
}