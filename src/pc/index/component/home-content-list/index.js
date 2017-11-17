import React from "react";
import HomeContentListItem from "../home-content-list-item/index";
import sortProject from "../../../lib/app/js/sort-project";
import Sortable from "sortablejs";
import $ from "jquery";

import "./index.less";

const w = 170;
const h = 364;
let arr = [];
let sortable = null;
export default class HomeContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: props.project || [],
      newData: []
    };
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.state.newData !== nextState.newData) {
      this.setState({
        listArr: nextState.newData
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      listArr: nextProps.project.data
    });
  }
  componentDidUpdate() {
    let that = this;
    var el = this.refs.list;
    //$(el).sortable("destroy");
    if (!el) {
      return;
    }
    if (!sortable) {
      sortable = Sortable.create(el, {
        handler: ".group",
        sort: true
      });
    }

    [].forEach.call(el.querySelectorAll(".group"), function(el1) {
      Sortable.create(el1, {
        group: {
          name: "pc-home-content-list-item",
          pull: "clone",
          put: "pc-home-content-list-item"
        },
        clone: true,
        sort: true,
        draggable: false,
        onStart: function(e) {
          let items = $(".pc-home-content-list-item");
        },
        onAdd: function(evt) {
          var itemEl = evt.item; // dragged HTMLElement
          let origParent = evt.from;
          origParent.appendChild(itemEl);
        },
        onUpdate: function() {
          let a = that.storeData(that.state.listArr);
          let items = $(".pc-home-content-list-item");
          let data = [];
          items.map(item => {
            let id = items[item].dataset.id;
            a.map(i => {
              if (i.id == id) {
                data.push(i.data);
              }
            });
          });
          // that.setState({
          //   newData: data
          // });
        }
      });
    });
  }
  //存储原生数据
  storeData = data => {
    let obj = [];
    data.map((item, index) => {
      obj[index] = {};
      obj[index].id = item.id;
      obj[index].data = item;
    });
    return obj;
  };

  render() {
    if (this.props.project) {
      console.log(this.props.project);
      // }
      // if (this.state.listArr && this.state.listArr.length > 0) {
      let allData = sortProject(this.props.project.data);
      let that = this;
      return (
        <div ref="list" className="pc-home-content-list">
          <div className="list-even">
            {allData &&
              allData.map((item1, index) => {
                if (!(index % 2)) {
                  return (
                    <div key={index} className="group">
                      {item1.map(item => {
                        let style = this.size(item);
                        return (
                          <HomeContentListItem
                            key={item[0].id.toString()}
                            // text = {item[0].id}
                            text={item[0].id}
                            // transform = {`translate3d(${item[1].top} ${item[1].left})`}
                            // top = {item[1].top} left = {item[1].left
                            id={item[0].id}
                            width={style.width}
                            height={style.height}
                            src={item[0].img}
                            name={item[0].name}
                            descType={item[0].type}
                            background={item[0].color}
                            url={item[0].url}
                            name={item[0].name}
                            score={item[0].score}
                            downloads={item[0].downloads}
                            carousels={item[0].carousels}
                          />
                        );
                      })}
                    </div>
                  );
                }
              })}
          </div>
          <div className="list-odd">
            {allData &&
              allData.map((item1, index) => {
                if (index % 2) {
                  return (
                    <div key={index} className="group">
                      {item1.map(item => {
                        let style = this.size(item);
                        return (
                          <HomeContentListItem
                            key={item[0].id.toString()}
                            // text = {item[0].id}
                            text={item[0].id}
                            id={item[0].id}
                            // transform = {`translate3d(${item[1].top} ${item[1].left})`}
                            // top = {item[1].top} left = {item[1].left
                            width={style.width}
                            height={style.height}
                            background={item[0].color}
                            url={item[0].url}
                            name={item[0].name}
                            score={item[0].score}
                            downloads={item[0].downloads}
                            carousels={item[0].carousels}
                          />
                        );
                      })}
                    </div>
                  );
                }
              })}
          </div>
        </div>
      );
    } else {
      return <span />;
    }
  }
  size = item => {
    if (!item) return;
    var res = {};
    switch (item[0].grid_type) {
      case 1:
        res.width = w;
        res.height = w;
        break;
      case 2:
        res.width = w;
        res.height = h;
        break;
      case 3:
        res.width = h;
        res.height = w;
        break;
      case 4:
        res.width = h;
        res.height = h;
        break;
    }
    return res;
  };
}
