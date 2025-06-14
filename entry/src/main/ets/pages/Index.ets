@Entry
@Component
struct Index {
  @State message: string = 'Hello World';


  build() {
   List(){
     //子組件
     ListItem(){
       Row(){
         Image($r('app.media.app_icon')).width(40).height(40).margin(10)
         Text("漩涡鸣人")
       }
     }
     //子組件
     ListItem(){
       Row(){
         Image($r('app.media.app_icon')).width(40).height(40).margin(10)
         Text("漩涡鸣人")
       }
     }

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