import React, {
    Component
} from 'react'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : ''
        }

        this.onChange =this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }




    render() {

    

        return ( <div>
            <h1> Add Posts </h1> 

            <form>
                <div>
                    <label>Title: </label><br/>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                </div>
                <div>
                    <label>Body: </label><br/>
                    <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    <br/>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <hr/>

            </div>
        )
    }
}

export default PostForm;