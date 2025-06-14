@Entry
@Component
struct ListIndex {
  @State data:string[] = [];
  aboutToAppear(): void {
    for (let i = 0; i < 20; i++) {
      this.data.push('逃单小孩'+i.toString())
    }
  }
  build() {

    List({space:10}){
      //子組件
      ForEach(this.data,(item:string,index:number)=>{
        ListItem(){
          Row(){
            Image($r('app.media.app_icon')).width(40).height(40).margin(10)
            Text(item)
          }.backgroundColor(Color.Yellow).width("80%")
        }.onClick(()=>{
          console.log("点击第几个"+index)
        })

      })


      //Axis.Horizontal  ：横向滑动
      //   Axis.Vertical：纵向滑动     默认的
    }.listDirection(Axis.Vertical)
    // ListItemAlign.Start：左对齐  默认的
    // ListItemAlign.End：右对齐
    // ListItemAlign.Center：居中对齐
    .alignListItem(ListItemAlign.Start)
    .height('100%')
    .width('100%')
  }
}