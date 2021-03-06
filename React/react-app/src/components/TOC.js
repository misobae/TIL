import React, {Component} from 'react';

class TOC extends Component {
    // Component의 render함수의 실행을 제어할 수 있도록 하는 함수
    shouldComponentUpdate(newProps, newState){
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render(){
        const lists = [];
        const data = this.props.data;
        for(let i = 0; i < data.length; i++){
            // 여러 개의 엘리먼트를 자동으로 생성하는 경우, key prop를 갖고 있어야 한다.
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>
            );
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;