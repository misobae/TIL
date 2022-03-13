import React, {Component} from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information.'},
        {id: 2, title: 'CSS', desc: 'CSS is for design.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'},
      ]
    }
  }
  getReadContent(){
    for(let i = 0; i < this.state.contents.length; i++){
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }
  }
  getContent(){
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'read'){
      const _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        const _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id
        });
        }.bind(this)} />
    } else if(this.state.mode === 'update'){
      const _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          const _contents = Array.from(this.state.contents);
          for(let i = 0; i< _contents.length; i++){
            if(_contents[i].id === _id){
              _contents[i] = {id: _id, title: _title, desc: _desc};
            }
          }
          this.setState({
            contents: _contents,
            mode: 'read'
          });
        }.bind(this)} />
    }
    return _article;
  }
  
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            // Component 생성이 끝난 뒤 동적으로 state 값을 바꿀 때 setState 함수 사용.
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}
        />
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        />
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('Really?')){
              const _contents = Array.from(this.state.contents);
              for(let i = 0; i < _contents.length; i++) {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1);
                }
              }
              this.setState({
                mode: 'welcome',
                contents:_contents
              })
              alert('Deleted!');
            }
          } else {
            this.setState({
              mode: _mode  
            });
          }
        }.bind(this)}/>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
